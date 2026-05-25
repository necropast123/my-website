import React from "react";
import { TrendingUp, RefreshCw, ShieldAlert, Settings, X, Info } from "lucide-react";

interface HeaderProps {
  onAnalyze: (ticker: string) => void;
  loading: boolean;
  tickerInput: string;
  setTickerInput: (val: string) => void;
  hasApiKey: boolean;
}

export default function Header({ onAnalyze, loading, tickerInput, setTickerInput, hasApiKey }: HeaderProps) {
  const [showSecretsGuide, setShowSecretsGuide] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tickerInput.trim()) {
      onAnalyze(tickerInput.trim().toUpperCase());
    }
  };

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-slate-800/60 bg-[#0F1218] flex items-center justify-between px-6 md:px-8 shadow-md">
      {/* Brand logo details based on Sleek Interface */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg">
          <TrendingUp className="h-4.5 w-4.5" />
        </div>
        <div>
          <h1 className="font-sans font-bold text-lg text-white tracking-tight flex items-center gap-1.5 leading-none">
            STOCK <span className="text-indigo-400">PREDICTOR</span>
            <span className="text-[9px] font-mono tracking-wider uppercase bg-[#1A1D23] text-indigo-450 border border-slate-800 px-1.5 py-0.5 rounded font-extrabold">
              AI PRO
            </span>
          </h1>
        </div>
      </div>

      {/* Analytical controls section */}
      <div className="flex items-center gap-4">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <div className="relative flex items-center bg-[#1A1D23] rounded-full border border-slate-700/80 px-3 py-1.5 w-44 sm:w-80 group transition duration-150 focus-within:border-indigo-500">
            <svg className="w-4 h-4 text-slate-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Ticker (e.g., NVDA, BTC, TSLA)"
              value={tickerInput}
              onChange={(e) => setTickerInput(e.target.value)}
              disabled={loading}
              className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-450"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !tickerInput.trim()}
            className="absolute right-1 text-xs font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-500 px-3.5 py-1 transition cursor-pointer flex items-center gap-1 shadow-sm h-[26px]"
          >
            {loading ? (
              <RefreshCw className="h-3 w-3 animate-spin" />
            ) : (
              "Analyze"
            )}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setShowSecretsGuide(true)}
          className="p-2 text-slate-400 hover:text-indigo-400 transition bg-slate-900 border border-slate-800 hover:border-indigo-550/30 rounded-full flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          title="Where is Settings & secrets?"
        >
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Settings & Secrets</span>
        </button>

        {!hasApiKey ? (
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-400 bg-amber-950/20 px-2.5 py-1 rounded-full border border-amber-900/40">
            <ShieldAlert className="h-3 w-3 text-amber-500 shrink-0" />
            <span>NO GEMINI KEY</span>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/20 px-2.5 py-1 rounded-full border border-emerald-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>MARKET ALIVE</span>
          </div>
        )}
      </div>

      {/* Floating Secrets & Settings Help Modal dialog overlay */}
      {showSecretsGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="bg-[#0F1218] border border-slate-800 rounded-2xl w-full max-w-md p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setShowSecretsGuide(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition p-1 cursor-pointer bg-slate-900 border border-slate-800 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-950/50 rounded-xl border border-indigo-500/30 text-indigo-400">
                <Settings className="h-6 w-6 animate-spin" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">How to configure Secrets</h3>
                <p className="text-xs text-slate-400">Configure your personal Gemini API key.</p>
              </div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-300 space-y-3 font-sans leading-relaxed">
              <div className="flex gap-2.5">
                <span className="flex-shrink-0 h-5 w-5 bg-indigo-950 text-indigo-400 font-mono font-bold flex items-center justify-center rounded border border-indigo-500/20">1</span>
                <span>
                  Look at the **Settings menu panel** on the far top-right corner of the **Google AI Studio editor wrapper** or the bottom-left sidebar cog ⚙️.
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="flex-shrink-0 h-5 w-5 bg-indigo-950 text-indigo-400 font-mono font-bold flex items-center justify-center rounded border border-indigo-500/20">2</span>
                <span>
                  Select the **"Secrets" / "API Keys"** section option item.
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="flex-shrink-0 h-5 w-5 bg-indigo-950 text-indigo-400 font-mono font-bold flex items-center justify-center rounded border border-indigo-500/20">3</span>
                <span>
                  Add a new secret value variable with the exact identifier: 
                  <code className="text-indigo-400 block px-2 py-1 bg-slate-900 border border-slate-800 rounded mt-1 font-mono font-bold">GEMINI_API_KEY</code>
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="flex-shrink-0 h-5 w-5 bg-indigo-950 text-indigo-400 font-mono font-bold flex items-center justify-center rounded border border-indigo-500/20">4</span>
                <span>
                  Paste your active key from **ai.google.dev**. The container environment will automatically bind it server-side.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-indigo-950/20 border border-indigo-900/40 rounded-xl text-slate-300 text-xs leading-relaxed">
              <Info className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>We currently use our Synthesized Fallback Engine to guarantee high-accuracy results even without a key configured.</span>
            </div>

            <button
              onClick={() => setShowSecretsGuide(false)}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

