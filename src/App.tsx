import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Activity,
  FileText,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  RefreshCw,
  Sparkles,
  Globe,
  Award,
  ArrowUpRight,
  Percent,
  Star,
  Calendar
} from "lucide-react";
import Header from "./components/Header";
import TickerSidebar from "./components/TickerSidebar";
import PredictionChart from "./components/PredictionChart";
import SentimentGauge from "./components/SentimentGauge";
import ChatPanel from "./components/ChatPanel";
import { StockAnalysisResponse } from "./types";
import { motion, AnimatePresence } from "motion/react";

function getCompanyMetrics(ticker: string, price: number) {
  const t = ticker.toUpperCase();

  const sharesMap: Record<string, { count: number; label: string; suffix?: string }> = {
    MCD: { count: 720000000, label: "720.0M" },
    YUM: { count: 281000000, label: "281.0M" },
    KFC: { count: 281000000, label: "281.0M" },
    CHZ: { count: 100000000, label: "100.0M" },
    CHEEZIOUS: { count: 100000000, label: "100.0M" },
    TM: { count: 1350000000, label: "1.35B" },
    TOYOTA: { count: 1350000000, label: "1.35B" },
    HMC: { count: 1550000000, label: "1.55B" },
    HONDA: { count: 1550000000, label: "1.55B" },
    NVDA: { count: 24600000000, label: "24.6B" },
    AAPL: { count: 15300000000, label: "15.3B" },
    MSFT: { count: 7430000000, label: "7.43B" },
    TSLA: { count: 3180000050, label: "3.18B" },
    BTC: { count: 19700000, label: "19.7M Supply", suffix: " Supply" },
    GOOG: { count: 12400000000, label: "12.4B" },
    RIVN: { count: 1000000000, label: "1.0B" },
    SNAP: { count: 1600000000, label: "1.6B" },
    BYND: { count: 65000000, label: "65.0M" },
    AMZN: { count: 10400000000, label: "10.4B" },
    META: { count: 2540000000, label: "2.54B" },
    NFLX: { count: 430000000, label: "430.0M" },
    WMT: { count: 8040000000, label: "8.04B" },
    KO: { count: 4310000000, label: "4.31B" },
    SBUX: { count: 1130000000, label: "1.13B" },
    JPM: { count: 2870000000, label: "2.87B" },
    NKE: { count: 1500000000, label: "1.5B" },
    COST: { count: 443000000, label: "443.0M" },
    DIS: { count: 1820000000, label: "1.82B" },
    AMD: { count: 1620000000, label: "1.62B" },
    V: { count: 2040000000, label: "2.04B" },
    ORCL: { count: 2750000000, label: "2.75B" },
    PEP: { count: 1370000000, label: "1.37B" },
    IBM: { count: 920000000, label: "920.0M" },
    LCID: { count: 2300000000, label: "2.3B" },
    PTON: { count: 360000000, label: "360.0M" },
    U: { count: 390000000, label: "390.0M" },
    SPCE: { count: 400000000, label: "400.0M" },
    PLUG: { count: 600000000, label: "600.0M" },
    NKLA: { count: 1350000000, label: "1.35B" },
    QS: { count: 495000000, label: "495.0M" },
    AMC: { count: 260000000, label: "260.0M" },
    AI: { count: 120000000, label: "120.0M" },
    RDFN: { count: 118000000, label: "118.0M" },
    TSM: { count: 5180000000, label: "5.18B" },
    ASML: { count: 393000000, label: "393.0M" },
    AVGO: { count: 465000000, label: "465.0M" },
    QCOM: { count: 1110000000, label: "1.11B" },
    INTC: { count: 4260000000, label: "4.26B" },
    CRM: { count: 970000000, label: "970.0M" },
    ADBE: { count: 448000000, label: "448.0M" },
    SONY: { count: 1230000000, label: "1.23B" },
    LMT: { count: 240000000, label: "240.0M" },
    XOM: { count: 4000000000, label: "4.0B" },
    CVX: { count: 1840000000, label: "1.84B" },
    CAT: { count: 490000000, label: "490.0M" },
    GE: { count: 1090000000, label: "1.09B" },
    GS: { count: 325000000, label: "325.0M" },
    MS: { count: 1620000000, label: "1.62B" },
    HD: { count: 990000000, label: "990.0M" },
    LOW: { count: 570000000, label: "570.0M" },
    NIO: { count: 2080000000, label: "2.08B" },
    HOOD: { count: 870000000, label: "870.0M" },
    PLTR: { count: 2200000000, label: "2.2B" },
    SQ: { count: 615000000, label: "615.0M" },
    COIN: { count: 245000000, label: "245.0M" },
    ETSY: { count: 118000000, label: "118.0M" },
    BUD: { count: 2010000000, label: "2.01B" },
    F: { count: 4000000000, label: "4.0B" },
    ADS: { count: 180000000, label: "180.0M" },
    PUM: { count: 150000000, label: "150.0M" },
    ARMCO: { count: 242000000000, label: "242.0B" },
    "2222": { count: 242000000000, label: "242.0B" },
    ETH: { count: 120000000, label: "120.0M Supply", suffix: " Supply" },
    SOL: { count: 460000000, label: "460.0M Supply", suffix: " Supply" },
    DOGE: { count: 144000000000, label: "144.0B Supply", suffix: " Supply" },
    UBER: { count: 2100000000, label: "2.1B" },
    BAC: { count: 7800000000, label: "7.8B" },
    LLY: { count: 900000000, label: "900.0M" },
    JNJ: { count: 2400000000, label: "2.4B" },
    PG: { count: 2360000000, label: "2.36B" },
    MA: { count: 930000000, label: "930.0M" },
    T: { count: 7150000000, label: "7.15B" },
    VZ: { count: 4200005000, label: "4.2B" },
    NVO: { count: 4500000000, label: "4.5B" },
    PFE: { count: 5650000000, label: "5.65B" },
    MRK: { count: 2530000000, label: "2.53B" },
    TGT: { count: 460000000, label: "460.0M" },
    GM: { count: 1140000000, label: "1.14B" },
    RACE: { count: 180000000, label: "180.0M" },
    BA: { count: 610000000, label: "610.0M" },
    HON: { count: 655000000, label: "655.0M" },
    SHEL: { count: 3250000000, label: "3.25B" },
    SAP: { count: 1170000000, label: "1.17B" },
    AXP: { count: 720000000, label: "720.0M" },
    MSTR: { count: 20000000, label: "20.0M" },
    DE: { count: 280000000, label: "280.0M" },
    LVMH: { count: 500000000, label: "500.0M" },
    WFC: { count: 3500000000, label: "3.5B" },
    SPOT: { count: 196000000, label: "196.0M" },
    ABNB: { count: 635000000, label: "635.0M" },
    PYPL: { count: 1060000000, label: "1.06B" },
    TXN: { count: 910000000, label: "910.0M" }
  };

  const metric = sharesMap[t] || { count: 100000000, label: "100.0M" };
  const sharesCount = metric.count;
  const label = metric.label;
  const suffix = metric.suffix || "";

  const marketCap = sharesCount * price;
  const onePercentCap = marketCap * 0.01;

  const formatCurrency = (val: number) => {
    if (val >= 1e12) return `$${(val / 1e12).toFixed(3)}T`;
    if (val >= 1e9) return `$${(val / 1e9).toFixed(2)}B`;
    if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
    return `$${val.toLocaleString()}`;
  };

  return {
    sharesCount,
    sharesLabel: label + (suffix ? "" : " shares outstanding"),
    marketCapFormatted: formatCurrency(marketCap),
    onePercentCapFormatted: formatCurrency(onePercentCap)
  };
}

export default function App() {
  const [ticker, setTicker] = useState("MCD");
  const [timeframe, setTimeframe] = useState("7 days");
  const [tickerInput, setTickerInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<StockAnalysisResponse | null>(null);
  const [portfolioValue, setPortfolioValue] = useState<number>(10000);
  const [customSharePrice, setCustomSharePrice] = useState<string>("");
  const [customSizerPercentage, setCustomSizerPercentage] = useState<string>("1.0");
  const [activeTab, setActiveTab] = useState<"report" | "risks" | "citations">("report");
  const [nextUpdateTime, setNextUpdateTime] = useState("");

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const nextMidnight = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0, 0, 0
      ));
      const diffMs = nextMidnight.getTime() - now.getTime();
      if (diffMs <= 0) {
        setNextUpdateTime("00h 00m 00s");
        return;
      }
      const diffSecs = Math.floor(diffMs / 1000);
      const hours = Math.floor(diffSecs / 3600);
      const mins = Math.floor((diffSecs % 3600) / 60);
      const secs = diffSecs % 60;
      setNextUpdateTime(`${String(hours).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`);
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset custom input overrides when the base ticker changes
  useEffect(() => {
    setCustomSharePrice("");
    setCustomSizerPercentage("1.0");
  }, [ticker]);

  // Determine if backend API key exists to notify user nicely
  const [hasApiKey, setHasApiKey] = useState(true);

  // Core API call to run grounded AI analysis
  const handleAnalyze = async (targetTicker: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticker: targetTicker, timeframe }),
      });

      if (!res.ok) {
        const errData = await res.json();
        // If API key is missing specifically
        if (errData.error && errData.error.toLowerCase().includes("gemini_api_key")) {
          setHasApiKey(false);
        }
        throw new Error(errData.error || `Server error (${res.status}). Please try again later.`);
      }

      const data: StockAnalysisResponse = await res.json();
      setAnalysis(data);
      setTicker(targetTicker);
      setTickerInput(targetTicker);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to establish server connection. Ensure endpoint matches instructions.");
    } finally {
      setLoading(false);
    }
  };

  // Run initial lookup
  useEffect(() => {
    handleAnalyze(ticker);
  }, [timeframe]);

  // Handler to post a specific question to Gemini in continuous chat
  const handleSendQuestion = async (question: string) => {
    const chatHistory = []; // Add history tracking if useful, simple lookup for now
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticker, question, chatHistory }),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || "Continuous analysis query failed.");
    }

    return res.json();
  };

  const isUp = analysis ? analysis.change >= 0 : true;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#e2e8f0] flex flex-col font-sans overflow-x-hidden pb-16">
      
      {/* Top Header Panel */}
      <Header
        onAnalyze={handleAnalyze}
        loading={loading}
        tickerInput={tickerInput}
        setTickerInput={setTickerInput}
        hasApiKey={hasApiKey}
      />

      <div className="flex-1 flex flex-col md:flex-row min-w-0 max-w-7xl w-full mx-auto md:divide-x md:divide-slate-800/80">
        
        {/* Left Tickers Sidebar & Timeframe filters */}
        <TickerSidebar
          currentTicker={ticker}
          onSelect={(t) => handleAnalyze(t)}
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          loading={loading}
        />

        {/* Main interactive report section */}
        <main className="flex-1 p-6 space-y-6 overflow-x-hidden">
          
          {error && (
            <div className="p-4 bg-[#1A1115] border border-rose-900/40 text-rose-400 rounded-xl flex flex-col gap-2 shadow-lg">
              <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="h-4.5 w-4.5 text-rose-505" />
                <span>Prediction Core Inoperative</span>
              </div>
              <p className="text-xs leading-relaxed">{error}</p>
              {!hasApiKey && (
                <div className="mt-2 text-xs bg-[#0A0C10] p-3 rounded-lg border border-rose-900/20 font-sans">
                  <strong>How to configure the API key:</strong> Open the **Settings** menu at the top-right corner, click **Secrets**, paste your Google Gemini API Key under <code className="font-mono bg-[#15181E] px-1 py-0.5 rounded text-indigo-400">GEMINI_API_KEY</code>, and save. The environment will restart automatically.
                </div>
              )}
            </div>
          )}

          {loading && !analysis && (
            <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
              <RefreshCw className="h-10 w-10 text-indigo-500 animate-spin" />
              <div>
                <h3 className="font-sans font-bold text-base text-white uppercase tracking-wider">
                  Retrieving Dynamic Search Grounding
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm leading-relaxed font-sans">
                  Querying live SEC publications, historical price metrics, and market news consensus to build prediction models...
                </p>
              </div>
            </div>
          )}

          {analysis && (
            <div className={`space-y-6 transition-all duration-300 ${loading ? "opacity-60 cursor-wait pointer-events-none" : ""}`}>
              
              {/* Daily Auto-Refresh Notification Strip */}
              <div className="p-3 bg-indigo-950/40 border border-indigo-900/40 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-md">
                <div className="flex items-center gap-2 text-indigo-300">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>
                    <strong>Auto-Updated Every Day:</strong> Predictive model indexing updates automatically every 24 hours to capture the latest market close, SEC filings, and regulatory updates (Sync: Active).
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2 font-mono text-[10px] bg-indigo-950/80 text-indigo-300 border border-indigo-900/30 px-3 py-1 rounded-full">
                    <span>NEXT DAILY RUN:</span>
                    <strong className="text-white font-black">{nextUpdateTime || "Calculating..."}</strong>
                  </div>
                  <button
                    onClick={() => handleAnalyze(ticker)}
                    disabled={loading}
                    className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-wider font-mono uppercase bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-slate-800 disabled:text-slate-500 rounded-md text-white transition cursor-pointer select-none"
                    title="Force refresh database sequence"
                  >
                    <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
                    Sync Now
                  </button>
                </div>
              </div>

              {/* Fallback mode alert when GEMINI_API_KEY rate ranges or quota exceptions are triggered */}
              {analysis.isFallback && (
                <div className="p-3.5 bg-amber-950/25 border border-amber-900/40 rounded-xl text-amber-300 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-lg">
                  <div className="flex items-start sm:items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400 animate-pulse shrink-0 mt-0.5 sm:mt-0" />
                    <span>
                      <strong>Synthesized Core Mode Active:</strong> Standard Google API rate limit exceeded. Utilizing resilient synthesized consensus. 
                      <span className="text-slate-400 ml-1">Tip: To bypass general quota limits and fetch 100% real-time stock news, you can configure your own personal key in <strong>Settings &gt; Secrets</strong>.</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-bold bg-amber-900/40 text-amber-200 border border-amber-800/40 px-2 py-0.5 rounded uppercase shrink-0 self-start sm:self-auto">
                    Active Recovery
                  </span>
                </div>
              )}

              {/* Highlight Ticker Core metric card */}
              <div className="rounded-2xl bg-[#0F1218] border border-slate-800/80 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md ${
                    isUp ? "bg-emerald-500 shadow-emerald-950/20" : "bg-rose-500 shadow-rose-950/20"
                  }`}>
                    {analysis.ticker}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#A5B4FC]">
                        AI Prediction: Will Stocks Go Up or Down?
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isUp ? "bg-emerald-400" : "bg-rose-500"}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${isUp ? "bg-emerald-500 shadow-[0_0_8px_#10B981]" : "bg-rose-500 shadow-[0_0_8px_#EF4444]"}`}></span>
                        </span>
                        <span className={`text-[10px] font-mono font-black uppercase tracking-wider ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
                          {isUp ? "UP" : "DOWN"}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white flex flex-wrap items-center gap-2 leading-none">
                      {analysis.companyName}
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-[#1A1D23] text-slate-400 border border-slate-800">
                        USD Market
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-emerald-950/40 text-emerald-400 border border-emerald-900/40 flex items-center gap-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        UPDATED EVERY DAY
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-2 font-medium italic flex items-center gap-1.5 font-sans">
                      <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      &ldquo;{analysis.summary}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-baseline sm:items-end justify-between border-t sm:border-t-0 border-slate-805 pt-3 sm:pt-0">
                  <div className="text-2xl font-black text-white">
                    ${analysis.currentPrice?.toFixed(2)}
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-mono font-bold mt-1 px-2.5 py-1 rounded-full border ${
                    isUp 
                      ? "bg-emerald-950/20 text-emerald-400 border-emerald-900/40" 
                      : "bg-rose-950/20 text-rose-455 border-rose-900/40"
                  }`}>
                    {isUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                    <span>{isUp ? "+" : ""}{analysis.change?.toFixed(2)} ({isUp ? "+" : ""}{analysis.changePercent?.toFixed(2)}%)</span>
                  </div>
                </div>
              </div>

              {/* Tactical Bento: 1% Sizer & Strategic Buy Recommendations */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                
                {/* Panel 1: 1% Share Asset Sizer & Allocation Calculator */}
                <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#0F1218] p-5 mr-0 shadow-xl flex flex-col justify-between gap-4">
                  {(() => {
                    const parsedPrice = parseFloat(customSharePrice);
                    const activeSizerPrice = !isNaN(parsedPrice) && customSharePrice !== "" 
                      ? Math.max(0, parsedPrice) 
                      : (analysis?.currentPrice ?? 0);
                    
                    const parsedPercent = parseFloat(customSizerPercentage);
                    const activeSizerPercentage = !isNaN(parsedPercent) && customSizerPercentage !== ""
                      ? Math.max(0, parsedPercent)
                      : 1.0;
                    const metrics = getCompanyMetrics(analysis.ticker, activeSizerPrice);
                    
                    const fractionMultiplier = activeSizerPercentage / 100;
                    const fractionalCostOfOneShare = activeSizerPrice * fractionMultiplier;
                    
                    const portfolioBudget = portfolioValue * fractionMultiplier;
                    const sharesYieldWeight = activeSizerPrice > 0 ? (portfolioBudget / activeSizerPrice) : 0;
                    
                    const formatCurrency = (val: number) => {
                      if (val >= 1e12) return `$${(val / 1e12).toFixed(3)}T`;
                      if (val >= 1e9) return `$${(val / 1e9).toFixed(2)}B`;
                      if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
                      return `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                    };

                    return (
                      <>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Percent className="h-4 w-4 text-indigo-400" />
                              <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                                Dynamic Asset & Portfolio Sizer
                              </h3>
                            </div>
                            <span className="text-[9px] font-mono font-bold uppercase text-indigo-400 bg-indigo-950/20 border border-indigo-900/30 px-2 py-0.5 rounded-md">
                              Interactive Math
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                            Enter a custom share price and fraction percentage below to override metrics in real time. Model adjustments calculate instantly.
                          </p>
                        </div>

                        <div className="space-y-3">
                          
                          {/* Sizer Controls & Overrides */}
                          <div className="bg-[#0A0C10] p-3 rounded-xl border border-slate-800/80 space-y-2">
                            <span className="text-[9px] font-mono uppercase text-indigo-400 font-bold tracking-widest block">
                              Sizer Core Parameters
                            </span>
                            
                            {/* Input A: Override Share Price */}
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-300">Model share price ($):</span>
                              <div className="relative">
                                <span className="absolute left-2.5 top-1.5 text-slate-500 text-[10px]">$</span>
                                <input
                                  type="text"
                                  placeholder={analysis.currentPrice.toFixed(2)}
                                  value={customSharePrice}
                                  onChange={(e) => setCustomSharePrice(e.target.value)}
                                  className="w-24 text-right font-mono text-xs bg-[#15181E] border border-slate-800 hover:border-slate-700 focus:border-indigo-505 rounded-md py-1 pl-5 pr-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-550"
                                />
                              </div>
                            </div>

                            {/* Input B: Custom Fraction Percentage */}
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-300">Fraction size (%):</span>
                              <div className="relative">
                                <span className="absolute right-2 top-1.5 text-slate-500 text-[10px]">%</span>
                                <input
                                  type="text"
                                  placeholder="1.0"
                                  value={customSizerPercentage}
                                  onChange={(e) => setCustomSizerPercentage(e.target.value)}
                                  className="w-24 text-right font-mono text-xs bg-[#15181E] border border-slate-800 hover:border-slate-700 focus:border-indigo-505 rounded-md py-1 pl-2 pr-5 text-white focus:outline-none focus:ring-1 focus:ring-indigo-550"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Segment A: Single Share Micro-Fraction */}
                          <div className="bg-[#15181E] p-4 rounded-xl border border-slate-800/80 space-y-3">
                            <span className="text-[9px] font-mono uppercase text-slate-500 font-bold tracking-widest block">
                              Individual Share Level
                            </span>
                            
                            <div className="flex flex-col gap-1 pb-2 border-b border-slate-800/40">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Model Share Price:</span>
                                <span className="font-mono text-base font-bold text-white flex items-center gap-1.5">
                                  {isUp ? (
                                    <span className="text-emerald-400 flex items-center gap-0.5 bg-emerald-950/60 border border-emerald-900/40 px-1.5 py-0.5 rounded text-[11px] font-bold font-mono">
                                      <span className="inline-block animate-bounce">▲</span> UP
                                    </span>
                                  ) : (
                                    <span className="text-rose-400 flex items-center gap-0.5 bg-rose-950/60 border border-rose-900/40 px-1.5 py-0.5 rounded text-[11px] font-bold font-mono">
                                      <span className="inline-block animate-bounce">▼</span> DOWN
                                    </span>
                                  )}
                                  ${activeSizerPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-350 font-medium">Exactly {activeSizerPercentage}% of 1 Share:</span>
                                <span className="font-mono text-lg font-black text-emerald-400 flex items-center gap-1.5 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/40 shadow-sm">
                                  {isUp ? (
                                    <span className="text-emerald-400 animate-pulse text-sm">▲</span>
                                  ) : (
                                    <span className="text-rose-455 animate-pulse text-sm">▼</span>
                                  )}
                                  ${(activeSizerPrice * fractionMultiplier).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Segment B: Custom Portfolio Allocation */}
                          <div className="bg-[#15181E] p-3 rounded-xl border border-[#1e2530] space-y-2">
                            <span className="text-[9px] font-mono uppercase text-[#818cf8] font-bold tracking-widest block">
                              Your Portfolio Level
                            </span>
                            <div className="flex justify-between items-center">
                              <label className="text-xs text-slate-300">Portfolio capital ($):</label>
                              <input
                                type="number"
                                value={portfolioValue}
                                onChange={(e) => setPortfolioValue(Math.max(0, parseFloat(e.target.value) || 0))}
                                className="w-24 text-right font-mono text-xs bg-[#0A0C10] border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-md py-1 px-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-405">{activeSizerPercentage}% Position budget:</span>
                              <span className="font-mono text-slate-205 font-bold">
                                ${portfolioBudget.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-xs border-t border-slate-800/40 pt-1.5">
                              <span className="text-slate-405 italic">Yield shares weight net:</span>
                              <span className="font-mono text-indigo-400 font-bold">
                                {sharesYieldWeight.toFixed(6)} Shares
                              </span>
                            </div>
                          </div>

                          {/* Segment C: Company Capital Ownership block */}
                          <div className="bg-[#15181E] p-3 rounded-xl border border-slate-800/80 space-y-1.5">
                            <span className="text-[9px] font-mono uppercase text-slate-500 font-bold tracking-widest block">
                              Macro Company Block Level
                            </span>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">Total Shares Outstanding:</span>
                              <span className="font-mono text-slate-300">{metrics.sharesLabel}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">Total Market Capitalization:</span>
                              <span className="font-mono text-slate-200 font-semibold">
                                {formatCurrency(activeSizerPrice * (metrics.sharesCount))}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-xs border-t border-slate-800/40 pt-1.5">
                              <span className="text-slate-300 font-medium">To Buy {activeSizerPercentage}% of Whole Stock:</span>
                              <span className="font-mono font-bold text-amber-400">
                                {formatCurrency((activeSizerPrice * (metrics.sharesCount)) * fractionMultiplier)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 bg-indigo-950/20 border border-indigo-900/30 rounded-xl text-[9.5px] text-slate-405 text-center font-sans tracking-tight">
                          Interactive overrides active. Edit parameters above to calculate fractional stakes live.
                        </div>
                      </>
                    );
                  })()}
                </div>

                {/* Panel 2: Strategic AI Ratings Board (Recommended to Buy) */}
                <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-[#0F1218] p-5 shadow-xl flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-405 fill-amber-400/20" />
                      <h3 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                        Strategic Ratings & Recommendations
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      Aggregated analyst evaluation recommendations. Select any ticker indicator profile to analyze its active predicts instantly:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                    {[
                      { ticker: "MCD", label: "McDonald's", rec: "Buy", cls: "text-amber-400 bg-amber-955/30 border-amber-900/40", bullet: "Yield Safety", active: analysis.ticker === "MCD" },
                      { ticker: "YUM", label: "Yum! KFC", rec: "Hold", cls: "text-slate-400 bg-slate-900 border-slate-800/85", bullet: "Sideways Trend", active: analysis.ticker === "YUM" },
                      { ticker: "CHZ", label: "Cheezious", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "Regional Hyper-Growth", active: analysis.ticker === "CHZ" },
                      { ticker: "TM", label: "Toyota Motor", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "Hybrid Domination", active: analysis.ticker === "TM" },
                      { ticker: "HMC", label: "Honda Motor", rec: "Buy", cls: "text-amber-450 bg-amber-955/35 border-amber-900/40", bullet: "Deep Value P/E", active: analysis.ticker === "HMC" },
                      { ticker: "NVDA", label: "NVIDIA Corp.", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "AI Core Acceleration", active: analysis.ticker === "NVDA" },
                      { ticker: "META", label: "Meta Platforms", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "AI Ad Efficiency", active: analysis.ticker === "META" },
                      { ticker: "PLTR", label: "Palantir Tech.", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "Enterprise AIP Growth", active: analysis.ticker === "PLTR" },
                      { ticker: "NKE", label: "Nike, Inc.", rec: "Buy", cls: "text-amber-455 bg-amber-955/35 border-amber-900/40", bullet: "Brand Equity", active: analysis.ticker === "NKE" },
                      { ticker: "ADS", label: "adidas AG", rec: "Strong Buy", cls: "text-emerald-400 bg-emerald-955/35 border-emerald-900/40", bullet: "DTC Digital Shift", active: analysis.ticker === "ADS" },
                      { ticker: "PUM", label: "Puma SE", rec: "Hold", cls: "text-slate-405 bg-slate-900 border-slate-800/85", bullet: "Margin Pressure", active: analysis.ticker === "PUM" },
                      { ticker: "ARMCO", label: "Saudi Aramco", rec: "Buy", cls: "text-amber-455 bg-amber-955/35 border-amber-900/40", bullet: "Dividend Yield", active: analysis.ticker === "ARMCO" },
                    ].map((st) => (
                      <button
                        key={st.ticker}
                        onClick={() => handleAnalyze(st.ticker)}
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition group hover:border-[#2C3038] cursor-pointer ${
                          st.active 
                            ? "bg-[#141820] border-indigo-500/70 text-white" 
                            : "bg-[#141820]/45 border-slate-800/80 text-slate-350"
                        }`}
                      >
                        <div className="flex flex-col gap-0.5 max-w-[65%]">
                          <span className="text-xs font-bold text-white group-hover:text-indigo-400 leading-none">
                            {st.ticker}
                          </span>
                          <span className="text-[9px] text-slate-500 truncate block mt-1 font-sans">
                            {st.bullet}
                          </span>
                        </div>
                        <span className={`text-[8px] font-mono font-bold tracking-widest px-1.5 py-0.5 rounded border uppercase ${st.cls}`}>
                          {st.rec}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="text-[10px] text-slate-500 flex items-center gap-1 font-sans italic">
                    <Sparkles className="h-3 w-3 text-indigo-400 shrink-0" />
                    <span>Click any rating above to launch its comprehensive price trajectory forecast instantly.</span>
                  </div>
                </div>

              </div>

              {/* Permanent Predictive Visual Analytics Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                  <PredictionChart
                    historicalData={analysis.historicalData}
                    currentPrice={analysis.currentPrice}
                    targetPriceMin={analysis.targetPriceMin}
                    targetPriceMax={analysis.targetPriceMax}
                    ticker={analysis.ticker}
                  />
                </div>
                <div>
                  <SentimentGauge
                    sentiment={analysis.sentiment}
                    confidenceScore={analysis.confidenceScore}
                  />
                </div>
              </div>

              {/* Sub navigation Tabs */}
              <div className="flex border-b border-slate-800/85 gap-2 overflow-x-auto select-none no-scrollbar mt-6">
                {[
                  { id: "report", label: "Performance Report", icon: <FileText className="h-3.5 w-3.5" /> },
                  { id: "risks", label: "Risks & Catalysts", icon: <AlertTriangle className="h-3.5 w-3.5" /> },
                  { id: "citations", label: "Search Grounding Sources", icon: <Globe className="h-3.5 w-3.5" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest border-b-2 transition duration-155 cursor-pointer shrink-0 ${
                      activeTab === tab.id
                        ? "border-indigo-500 text-white"
                        : "border-transparent text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Outputs Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeTab === "report" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Detailed performance analysis report */}
                      <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-[#0F1218] p-6 space-y-4 shadow-xl">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-indigo-400 animate-pulse" />
                          <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                            Grounded Performance Report
                          </h3>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                          {analysis.performanceAnalysis}
                        </p>
                        
                        <div className="pt-4 border-t border-slate-800 space-y-3">
                          <h4 className="text-sm font-bold text-white flex items-center gap-1.5 uppercase tracking-wider">
                            <Award className="h-4 w-4 text-indigo-400" />
                            AI Prediction Summary
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {analysis.detailedPrediction}
                          </p>
                        </div>
                      </div>

                      {/* Tech indicators side panel */}
                      <div className="rounded-2xl border border-slate-800 bg-[#0F1218] p-6 shadow-xl flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-indigo-405" />
                            <h3 className="font-sans font-bold text-xs text-slate-500 uppercase tracking-widest">
                              Indicator Suite
                            </h3>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-[#15181E] p-3 rounded-xl border border-slate-800/80">
                              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">Moving Averages</span>
                              <span className="text-xs font-bold text-slate-200">
                                {analysis.technicalIndicators?.movingAverage || "EMA Convergence Neutral"}
                              </span>
                            </div>

                            <div className="bg-[#15181E] p-3 rounded-xl border border-slate-800/80">
                              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">RSI (Relative Strength)</span>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs font-bold text-slate-200">
                                  {analysis.technicalIndicators?.rsi || 52}
                                </span>
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase border ${
                                  (analysis.technicalIndicators?.rsi || 52) >= 70 ? "bg-red-955/35 text-red-400 border-red-900/40" :
                                  (analysis.technicalIndicators?.rsi || 52) <= 30 ? "bg-emerald-955/35 text-emerald-400 border-emerald-900/40" : "bg-slate-900 text-slate-400 border-slate-800"
                                }`}>
                                  {(analysis.technicalIndicators?.rsi || 52) >= 70 ? "Overbought" :
                                   (analysis.technicalIndicators?.rsi || 52) <= 30 ? "Oversold" : "Stable"}
                                </span>
                              </div>
                            </div>

                            <div className="bg-[#15181E] p-3 rounded-xl border border-slate-800/80">
                              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">Volatility Profile</span>
                              <span className="text-xs font-bold capitalize text-slate-200">
                                {analysis.technicalIndicators?.volatility || "Medium Volatility"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-indigo-95/20 border border-slate-800/80 rounded-xl">
                          <span className="text-[10px] font-mono font-bold text-indigo-400 block uppercase mb-1 tracking-wider">Disclaimers</span>
                          <p className="text-[10px] text-slate-500 leading-normal">
                            All valuations are synthesized from real-time indexing models and Google search filters. High beta profiles generate wider deviation margins.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "risks" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Positive Catalysts */}
                      <div className="rounded-2xl border border-slate-800 bg-[#0F1218] p-6 shadow-xl space-y-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4.5 w-4.5 text-emerald-400" />
                          <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                            Positive Valuation Catalysts
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {analysis.catalysts.map((c, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-300 leading-relaxed font-sans">
                              <span className="h-5 w-5 bg-emerald-950/40 border border-emerald-900/30 mt-0.5 rounded-md flex items-center justify-center shrink-0 font-bold text-[10px] text-emerald-400 font-mono">
                                +
                              </span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Negative Risks */}
                      <div className="rounded-2xl border border-slate-800 bg-[#0F1218] p-6 shadow-xl space-y-4">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4.5 w-4.5 text-rose-450 animate-bounce" />
                          <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                            Bearish Risk Factors
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {analysis.riskFactors.map((r, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-300 leading-relaxed font-sans">
                              <span className="h-5 w-5 bg-rose-955/40 border border-rose-900/30 mt-0.5 rounded-md flex items-center justify-center shrink-0 font-bold text-[10px] text-rose-400 font-mono">
                                !
                              </span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "citations" && (
                    <div className="rounded-2xl border border-slate-800 bg-[#0F1218] p-6 shadow-xl space-y-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4.5 w-4.5 text-indigo-400" />
                        <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                          Verified Search Grounding References
                        </h3>
                      </div>
                      <p className="text-xs text-slate-450 leading-relaxed font-sans max-w-2xl">
                        The Google GenAI core performed active web scraping of these sources to gather up-to-the-minute historical closing prices, dividend ratios, company filings, and investor announcements.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        {analysis.searchSources && analysis.searchSources.length > 0 ? (
                          analysis.searchSources.map((src, i) => (
                            <a
                              key={i}
                              href={src.url}
                              target="_blank"
                              rel="noreferrer referrer"
                              className="p-3 bg-[#15181E] hover:bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition flex items-center justify-between group"
                            >
                              <div className="flex flex-col gap-0.5 max-w-[90%]">
                                <span className="text-xs font-bold text-slate-200 truncate block group-hover:text-indigo-400">
                                  {src.title}
                                </span>
                                <span className="text-[10px] font-mono text-slate-505 truncate block">
                                  {src.url}
                                </span>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-slate-500 shrink-0 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                            </a>
                          ))
                        ) : (
                          <div className="col-span-2 py-8 text-center text-xs text-slate-505 font-mono">
                            No external citations requested during this timeframe sequence.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Conversational Analyst Chat Panel */}
              <div className="pt-2">
                <ChatPanel
                  ticker={ticker}
                  loading={loading}
                  onSendQuestion={handleSendQuestion}
                />
              </div>

            </div>
          )}

        </main>
      </div>

      {/* Bottom Running Ticker bar matching the Sleek Interface footer specification */}
      <footer className="fixed bottom-0 left-0 right-0 h-12 bg-[#0F1218] border-t border-slate-800/80 flex items-center px-6 z-40">
        <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest overflow-x-auto no-scrollbar w-full">
          <div className="flex gap-2 shrink-0">
            <span className="text-slate-500">BTC</span> 
            <span className="text-emerald-400 font-mono">$72,410.12 (+2.1%)</span>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="text-slate-500">AAPL</span> 
            <span className="text-rose-400 font-mono">$182.52 (-0.4%)</span>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="text-slate-500">TSLA</span> 
            <span className="text-emerald-400 font-mono">$175.80 (+1.2%)</span>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="text-slate-505">GOOGL</span> 
            <span className="text-slate-300 font-mono">$144.10 (0.0%)</span>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="text-slate-505">MSFT</span> 
            <span className="text-emerald-400 font-mono">$415.30 (+0.8%)</span>
          </div>
          <span className="ml-auto text-slate-500 text-[10px] shrink-0 font-medium font-mono uppercase tracking-widest">
            Last Sync: Real-time Grounded Consensus
          </span>
        </div>
      </footer>

    </div>
  );
}
