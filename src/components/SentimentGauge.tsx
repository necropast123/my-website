import { Smile, Frown, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

interface SentimentGaugeProps {
  sentiment: string;
  confidenceScore: number;
}

export default function SentimentGauge({ sentiment, confidenceScore }: SentimentGaugeProps) {
  // Map sentiment state into colors and descriptions for Sleek Interface
  const getSentimentMeta = (s: string) => {
    const sl = (s || "").toLowerCase();
    if (sl.includes("strongly bullish")) {
      return {
        label: "Strongly Bullish",
        colorText: "text-emerald-400",
        colorBg: "bg-[#0F1218]",
        colorBorder: "border-emerald-500/30",
        colorBar: "bg-emerald-500",
        desc: "Severe market momentum and powerful positive triggers are driving aggressive buy sentiment.",
        icon: <Smile className="h-5 w-5 text-emerald-400" />
      };
    }
    if (sl.includes("bullish")) {
      return {
        label: "Bullish",
        colorText: "text-green-400",
        colorBg: "bg-[#0F1218]",
        colorBorder: "border-green-500/20",
        colorBar: "bg-green-500",
        desc: "Favorable fundamentals and optimistic indicators support upward momentum.",
        icon: <Smile className="h-5 w-5 text-green-400" />
      };
    }
    if (sl.includes("strongly bearish")) {
      return {
        label: "Strongly Bearish",
        colorText: "text-rose-450",
        colorBg: "bg-[#0F1218]",
        colorBorder: "border-rose-500/30",
        colorBar: "bg-rose-500",
        desc: "Extensive downside triggers, sales reports, or negative events indicate heavy selloffs.",
        icon: <Frown className="h-5 w-5 text-rose-450" />
      };
    }
    if (sl.includes("bearish")) {
      return {
        label: "Bearish",
        colorText: "text-red-400",
        colorBg: "bg-[#0F1218]",
        colorBorder: "border-red-500/20",
        colorBar: "bg-red-400",
        desc: "Weak support or unfavorable rumors points to near-term consolidations or slight declines.",
        icon: <Frown className="h-5 w-5 text-red-400" />
      };
    }
    return {
      label: "Neutral",
      colorText: "text-[#10B981]",
      colorBg: "bg-[#0F1218]",
      colorBorder: "border-slate-800",
      colorBar: "bg-indigo-500",
      desc: "Balanced indicators suggest range-bound trading with equal catalysts and risks.",
      icon: <CheckCircle className="h-5 w-5 text-[#10B981]" />
    };
  };

  const meta = getSentimentMeta(sentiment);

  // Segment array to visualize standard sentiment grades
  const segments = [
    { label: "Bearish+", threshold: 20, col: "bg-rose-500/85" },
    { label: "Bearish", threshold: 40, col: "bg-red-400/85" },
    { label: "Neutral", threshold: 60, col: "bg-amber-400/85" },
    { label: "Bullish", threshold: 80, col: "bg-green-450/85" },
    { label: "Bullish+", threshold: 100, col: "bg-emerald-550/85" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Sentiment Gauge Card */}
      <div className={`p-6 rounded-2xl border ${meta.colorBg} ${meta.colorBorder} flex flex-col gap-4 justify-between shadow-xl`}>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
              Market Sentiment Bias
            </span>
            <h4 className={`text-xl font-bold tracking-tight mt-1 items-center gap-2 flex ${meta.colorText}`}>
              {meta.icon}
              {meta.label}
            </h4>
          </div>
          <span className="text-xs bg-[#1A1D23] text-slate-300 px-3 py-1 rounded-full font-bold border border-slate-800">
            AI Scanned
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed font-sans">
          {meta.desc}
        </p>

        {/* Visual sentiment bar slider */}
        <div className="w-full mt-2">
          <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
            <span>Strong Sell</span>
            <span>Balanced</span>
            <span>Strong Buy</span>
          </div>
          <div className="h-2 w-full bg-[#0A0C10] rounded-full overflow-hidden flex gap-0.5 border border-slate-800/60 p-[1px]">
            <div className={`h-full flex-1 rounded-full transition-all duration-500 ${meta.colorBar}`} style={{ width: sentiment.toLowerCase().includes("strong") ? "100%" : "60%" }} />
          </div>
        </div>
      </div>

      {/* Prediction Confidence Card */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-[#0F1218] flex flex-col justify-between shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
              Forecast Confidence Index
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-3xl font-black text-white">
                {confidenceScore}%
              </span>
              <span className="text-xs text-slate-500 font-mono font-bold">Precision rating</span>
            </div>
          </div>
          
          <div className="relative h-11 w-11 flex items-center justify-center bg-[#1A1D23] rounded-xl border border-slate-850">
            {/* SVG custom radial gauge */}
            <svg className="absolute transform -rotate-90 w-8 h-8">
              <circle
                cx="16"
                cy="16"
                r="13"
                className="stroke-slate-800"
                strokeWidth="3.5"
                fill="transparent"
              />
              <circle
                cx="16"
                cy="16"
                r="13"
                className="stroke-indigo-500"
                strokeWidth="3.5"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 13}
                strokeDashoffset={2 * Math.PI * 13 * (1 - confidenceScore / 100)}
              />
            </svg>
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 z-10" />
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed font-sans mt-2">
          Calculated using historical pattern match precision, technical convergence metrics, and the search grounding depth.
        </p>

        {/* Dynamic score summary indicator */}
        <div className="mt-4 text-xs flex items-center justify-between text-slate-500 font-mono font-bold">
          <span>RELIABILITY GRADE:</span>
          <span className={`font-bold uppercase tracking-wider ${
            confidenceScore >= 80 ? "text-emerald-400" :
            confidenceScore >= 60 ? "text-indigo-400" : "text-amber-450"
          }`}>
            {confidenceScore >= 80 ? "High Conviction" :
             confidenceScore >= 60 ? "Moderate conviction" : "Speculative / Critical"}
          </span>
        </div>
      </div>

    </div>
  );
}
