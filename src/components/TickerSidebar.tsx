import React from "react";
import { Calendar, Sparkles } from "lucide-react";

export function CompanyLogo({ ticker, className = "h-8 w-8" }: { ticker: string; className?: string }) {
  const t = ticker.toUpperCase();
  
  if (t === "MCD") {
    return (
      <div className={`rounded-xl bg-[#BD001C] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3" fill="none" stroke="#FFBC0D" strokeWidth="12" strokeLinecap="round">
          <path d="M 15,80 C 15,30 35,25 50,55 C 65,25 85,30 85,80" />
        </svg>
      </div>
    );
  }
  
  if (t === "YUM" || t === "KFC") {
    return (
      <div className={`rounded-xl bg-[#C41230] flex flex-col items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-xs font-black tracking-tight text-white leading-none">KFC</span>
      </div>
    );
  }
  
  if (t === "CHZ" || t === "CHEEZIOUS") {
    return (
      <div className={`rounded-xl bg-[#FF9900] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-white">
          <path d="M 20,80 L 80,80 L 80,45 L 20,25 Z" />
          <circle cx="45" cy="55" r="6" fill="#FF9900" />
          <circle cx="65" cy="65" r="5" fill="#FF9900" />
          <circle cx="35" cy="68" r="4" fill="#FF9900" />
        </svg>
      </div>
    );
  }
  
  if (t === "TM" || t === "TOYOTA") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 stroke-[#EB0A1E]" strokeWidth="6" fill="none">
          <ellipse cx="50" cy="50" rx="42" ry="28" />
          <ellipse cx="50" cy="46" rx="14" ry="24" />
          <ellipse cx="50" cy="38" rx="26" ry="12" />
        </svg>
      </div>
    );
  }
  
  if (t === "HMC" || t === "HONDA") {
    return (
      <div className={`rounded-xl bg-[#E31837] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%] fill-white">
          <path d="M 15,15 L 28,15 L 28,42 L 72,42 L 72,15 L 85,15 L 85,85 L 72,85 L 72,55 L 28,55 L 28,85 L 15,85 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "NVDA") {
    return (
      <div className={`rounded-xl bg-black border border-emerald-900/60 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-none stroke-[#76B900]" strokeWidth="8">
          <path d="M 15,50 A 35,35 0 0,1 85,50" strokeLinecap="round" />
          <path d="M 27,50 A 23,23 0 0,1 73,50" strokeLinecap="round" />
          <path d="M 39,50 A 11,11 0 0,1 61,50" strokeLinecap="round" />
          <path d="M 15,50 L 50,50 L 50,85" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  
  if (t === "AAPL") {
    return (
      <div className={`rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-slate-200">
          <path d="M 46,26 C 36,26 27,33 27,48 C 27,69 41,86 50,86 C 54,86 57,83 62,83 C 67,83 70,86 74,86 C 82,86 89,72 92,66 C 77,61 74,45 86,41 C 81,32 71,28 65,28 C 55,28 51,31 46,31 M 65,6 C 72,6 77,15 75,22 C 68,23 62,14 65,6 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "MSFT") {
    return (
      <div className={`rounded-xl bg-[#1A1D23] border border-slate-800 p-2 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <div className="grid grid-cols-2 gap-1 w-5 h-5">
          <div className="bg-[#F25022] w-full h-full rounded-[1px]" />
          <div className="bg-[#7FBA00] w-full h-full rounded-[1px]" />
          <div className="bg-[#00A4EF] w-full h-full rounded-[1px]" />
          <div className="bg-[#FFB900] w-full h-full rounded-[1px]" />
        </div>
      </div>
    );
  }
  
  if (t === "TSLA") {
    return (
      <div className={`rounded-xl bg-[#cc0000] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[60%] w-[60%] fill-white">
          <path d="M 20,20 C 40,24 60,24 80,20 C 78,32 66,45 50,55 C 34,45 22,32 20,20 Z" />
          <path d="M 44,55 H 56 V 80 H 44 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "BTC") {
    return (
      <div className={`rounded-xl bg-[#F7931A] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-sm font-black text-white font-mono leading-none">₿</span>
      </div>
    );
  }
  
  if (t === "GOOG") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%]">
          <path d="M 90,51 C 90,45 89,40 88,35 H 50 V 50 H 73 C 72,55 69,60 64,63 V 76 H 78 C 87,68 93,56 93,51" fill="#4285F4" />
          <path d="M 50,91 C 61,91 71,87 78,81 L 64,70 C 60,73 55,75 50,75 C 40,75 32,68 29,59 H 14 V 71 C 21,85 35,91 50,91 Z" fill="#34A853" />
          <path d="M 29,59 C 28,56 27,53 27,50 C 27,47 28,44 29,41 V 29 H 14 C 11,35 10,42 10,50 C 10,58 11,65 14,71 L 29,59 Z" fill="#FBBC05" />
          <path d="M 50,25 C 56,25 62,27 66,31 L 78,19 C 71,13 61,9 50,9 C 35,9 21,18 14,32 L 29,44 C 32,35 40,25 50,25 Z" fill="#EA4335" />
        </svg>
      </div>
    );
  }
  
  if (t === "RIVN") {
    return (
      <div className={`rounded-xl bg-[#0B1E21] border border-slate-905 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-[#FFC72C]">
          <path d="M 50,15 L 75,40 L 50,65 L 25,40 Z" />
          <path d="M 50,47 L 66,63 L 50,79 L 34,63 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "SNAP") {
    return (
      <div className={`rounded-xl bg-[#FFFC00] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 stroke-black stroke-[7] fill-white" strokeLinejoin="round" strokeLinecap="round">
          <path d="M 50,25 C 38,25 32,33 32,44 C 32,46 33,48 35,50 C 33,52 30,55 30,59 C 30,62 33,63 36,63 C 37,67 43,69 50,69 C 57,69 63,67 64,63 C 67,63 70,62 70,59 C 70,55 67,52 65,50 C 67,48 68,46 68,44 C 68,33 62,25 50,25 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "BYND") {
    return (
      <div className={`rounded-xl bg-[#0F352E] flex flex-col items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-black text-emerald-400 font-sans tracking-tight leading-none font-mono">BYND</span>
      </div>
    );
  }

  if (t === "AMZN") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%] fill-none">
          <path d="M 20,65 Q 50,85 80,65" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" />
          <path d="M 72,62 L 80,65 L 77,54" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  
  if (t === "META") {
    return (
      <div className={`rounded-xl bg-[#0064E0] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 stroke-white" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M 30,50 C 15,30 15,70 30,50 C 45,30 55,70 70,50 C 85,30 85,70 70,50 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "NFLX") {
    return (
      <div className={`rounded-xl bg-black border border-slate-900 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-[#E50914]">
          <path d="M 20,15 H 35 V 85 H 20 Z" />
          <path d="M 65,15 H 80 V 85 H 65 Z" />
          <path d="M 20,15 L 65,85 H 80 L 35,15 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "WMT") {
    return (
      <div className={`rounded-xl bg-[#0071CE] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[65%] w-[65%] stroke-[#FFC220]" strokeWidth="10" strokeLinecap="round">
          <line x1="50" y1="15" x2="50" y2="40" />
          <line x1="50" y1="60" x2="50" y2="85" />
          <line x1="19" y1="32" x2="41" y2="45" />
          <line x1="59" y1="55" x2="81" y2="68" />
          <line x1="19" y1="68" x2="41" y2="55" />
          <line x1="59" y1="45" x2="81" y2="32" />
        </svg>
      </div>
    );
  }
  
  if (t === "KO") {
    return (
      <div className={`rounded-xl bg-[#F40009] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[10px] font-sans font-black italic tracking-wider text-white leading-none">Coke</span>
      </div>
    );
  }
  
  if (t === "SBUX") {
    return (
      <div className={`rounded-xl bg-[#00704A] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-none stroke-white" strokeWidth="6">
          <circle cx="50" cy="50" r="40" fill="#00704A" stroke="white" strokeWidth="4" />
          <path d="M 35,70 C 40,55 60,55 65,70" />
          <path d="M 40,40 C 45,45 55,45 60,40" />
          <circle cx="45" cy="45" r="3" fill="white" />
          <circle cx="55" cy="45" r="3" fill="white" />
          <polygon points="53,20 57,35 72,38 58,45 62,60 50,52 38,60 42,45 28,38 43,35" fill="white" />
        </svg>
      </div>
    );
  }
  
  if (t === "JPM") {
    return (
      <div className={`rounded-xl bg-[#0A1A30] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 stroke-[#A89868]" strokeWidth="8" fill="none">
          <path d="M 50,15 L 85,50 L 50,85 L 15,50 Z" />
          <circle cx="50" cy="50" r="10" fill="#A89868" />
        </svg>
      </div>
    );
  }
  
  if (t === "NKE") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-white">
          <path d="M 12,50 C 25,48 55,59 86,22 C 82,35 62,65 30,68 C 22,69 11,62 12,50 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "COST") {
    return (
      <div className={`rounded-xl bg-[#004B87] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[9px] font-black italic tracking-tighter text-white leading-none">COSTCO</span>
      </div>
    );
  }
  
  if (t === "DIS") {
    return (
      <div className={`rounded-xl bg-[#001D3D] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-sm font-sans font-black italic text-[#FFD700] leading-none">D</span>
      </div>
    );
  }
  
  if (t === "AMD") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-[#ED1C24]">
          <path d="M 20,20 H 80 V 55 H 45 V 80 H 20 Z" />
          <path d="M 55,55 L 80,80 H 55 Z" />
        </svg>
      </div>
    );
  }
  
  if (t === "V") {
    return (
      <div className={`rounded-xl bg-[#0A1A30] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-xs font-black italic text-[#F7B600] tracking-tight leading-none">V<span className="text-white">ISA</span></span>
      </div>
    );
  }
  
  if (t === "ORCL") {
    return (
      <div className={`rounded-xl bg-[#E51B24] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[10px] font-black text-white px-1 leading-none">ORCL</span>
      </div>
    );
  }
  
  if (t === "PEP") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5">
          <path d="M 50,10 A 40,40 0 0,0 12,42 Q 50,30 88,42 A 40,40 0 0,0 50,10 Z" fill="#E31B23" />
          <path d="M 50,90 A 40,40 0 0,0 88,58 Q 50,70 12,58 A 40,40 0 0,0 50,90 Z" fill="#005C9E" />
          <path d="M 12,42 Q 50,30 88,42 C 90,46 90,54 88,58 Q 50,70 12,58 C 10,54 10,46 12,42 Z" fill="white" />
        </svg>
      </div>
    );
  }
  
  if (t === "IBM") {
    return (
      <div className={`rounded-xl bg-[#006699] flex flex-col justify-center items-center shrink-0 shadow-md p-1 ${className}`}>
        <span className="text-[10px] font-mono font-black tracking-tighter text-white leading-none">IBM</span>
      </div>
    );
  }
  
  if (t === "LCID") {
    return (
      <div className={`rounded-xl bg-[#1A1A1E] border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[8px] tracking-widest font-bold text-amber-200 uppercase">LUCID</span>
      </div>
    );
  }
  
  if (t === "PTON") {
    return (
      <div className={`rounded-xl bg-rose-950 border border-rose-900 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[60%] w-[60%] fill-none stroke-rose-400" strokeWidth="8">
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="14" fill="currentColor" stroke="none" className="fill-rose-450" />
          <line x1="50" y1="22" x2="50" y2="8" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  
  if (t === "U") {
    return (
      <div className={`rounded-xl bg-[#222c37] border border-slate-705 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 stroke-[#e2e8f0]" strokeWidth="8" fill="none">
          <path d="M 50,15 L 85,35 L 85,75 L 50,95 L 15,75 L 15,35 Z" />
          <line x1="50" y1="15" x2="50" y2="95" />
          <line x1="15" y1="35" x2="85" y2="75" />
          <line x1="15" y1="75" x2="85" y2="35" />
        </svg>
      </div>
    );
  }
  
  if (t === "SPCE") {
    return (
      <div className={`rounded-xl bg-[#130E30] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-none stroke-purple-400" strokeWidth="6">
          <circle cx="50" cy="50" r="35" strokeDasharray="10 5" />
          <path d="M 25,50 L 50,22 L 75,50 L 50,60 Z" fill="white" className="fill-purple-305" />
        </svg>
      </div>
    );
  }
  
  if (t === "PLUG") {
    return (
      <div className={`rounded-xl bg-sky-950 border border-sky-905 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 stroke-sky-400" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M 20,45 A 25,25 0 1,1 80,45" />
          <path d="M 35,45 L 35,65 L 45,75 M 65,45 L 65,65 L 55,75" strokeWidth="6" />
        </svg>
      </div>
    );
  }
  
  if (t === "NKLA") {
    return (
      <div className={`rounded-xl bg-[#111] border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[10px] font-black text-emerald-400 leading-none tracking-tighter font-mono">NKLA</span>
      </div>
    );
  }
  
  if (t === "QS") {
    return (
      <div className={`rounded-xl bg-teal-950 border border-teal-850 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-none stroke-teal-400" strokeWidth="8" strokeLinecap="round">
          <rect x="25" y="15" width="50" height="70" rx="6" />
          <path d="M 40,35 L 60,35 M 40,50 L 60,50 M 40,65 L 50,65" />
        </svg>
      </div>
    );
  }
  
  if (t === "AMC") {
    return (
      <div className={`rounded-xl bg-[#B31D1D] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-xs font-black italic text-white leading-none">AMC</span>
      </div>
    );
  }
  
  if (t === "AI") {
    return (
      <div className={`rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 stroke-indigo-400" strokeWidth="7" fill="none">
          <polygon points="50,15 85,50 50,85 15,50" />
          <line x1="50" y1="15" x2="50" y2="85" />
          <line x1="15" y1="50" x2="85" y2="50" />
        </svg>
      </div>
    );
  }
  
  if (t === "RDFN") {
    return (
      <div className={`rounded-xl bg-[#E02626] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-none stroke-white" strokeWidth="8" strokeLinecap="round">
          <path d="M 15,45 L 50,15 L 85,45 M 15,45 L 15,85 H 85 V 45" />
          <line x1="38" y1="55" x2="62" y2="55" stroke="currentColor" />
        </svg>
      </div>
    );
  }

  // Brand-accurate custom logos for newly added prominent companies
  if (t === "TSM") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[60%] w-[60%]">
          <circle cx="50" cy="50" r="38" fill="none" stroke="#E31B23" strokeWidth="6" />
          <path d="M 25,50 H 75 M 50,25 V 75 M 32,32 L 68,68 M 32,68 L 68,32" stroke="#4285F4" strokeWidth="5" />
        </svg>
      </div>
    );
  }

  if (t === "CRM") {
    return (
      <div className={`rounded-xl bg-[#00A1E0] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-white">
          <path d="M 50,25 C 40,25 35,32 35,40 C 25,40 22,48 30,58 C 30,68 65,68 70,58 C 78,48 75,40 65,40 C 65,32 60,25 50,25 Z" />
        </svg>
      </div>
    );
  }

  if (t === "ADBE") {
    return (
      <div className={`rounded-xl bg-[#FA0F00] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-white">
          <path d="M 50,15 L 85,85 H 63 L 50,50 L 37,85 H 15 Z" />
        </svg>
      </div>
    );
  }

  if (t === "SQ") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center p-2 shrink-0 shadow-md ${className}`}>
        <div className="w-5 h-5 rounded-lg border-[3px] border-emerald-400 flex items-center justify-center">
          <div className="w-[8px] h-[8px] rounded-[1.5px] bg-emerald-400" />
        </div>
      </div>
    );
  }

  if (t === "HOOD") {
    return (
      <div className={`rounded-xl bg-[#00C805] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-white">
          <path d="M 50,15 C 38,30 35,50 38,70 C 39,78 43,85 50,85 C 57,85 61,78 62,70 C 65,50 62,30 50,15 Z M 50,25 C 56,40 57,55 55,70 H 45 C 43,55 44,40 50,25 Z" />
        </svg>
      </div>
    );
  }

  if (t === "PLTR") {
    return (
      <div className={`rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 stroke-orange-400 fill-none" strokeWidth="6" strokeLinecap="round">
          <path d="M 50,15 L 85,73 H 15 Z" />
          <circle cx="50" cy="50" r="10" fill="currentColor" className="fill-orange-450 stroke-none" />
        </svg>
      </div>
    );
  }

  if (t === "INTC") {
    return (
      <div className={`rounded-xl bg-[#0068B7] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[11px] font-sans font-black italic tracking-tighter text-white leading-none">intel</span>
      </div>
    );
  }

  if (t === "F") {
    return (
      <div className={`rounded-xl bg-[#001C54] border border-blue-900 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[11px] font-serif italic font-black text-white tracking-wider leading-none">Ford</span>
      </div>
    );
  }

  if (t === "SONY") {
    return (
      <div className={`rounded-xl bg-black border border-slate-850 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[7px] font-bold tracking-[0.18em] text-white leading-none">SONY</span>
      </div>
    );
  }

  if (t === "COIN") {
    return (
      <div className={`rounded-xl bg-[#0052FF] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[8px] font-black tracking-widest text-white leading-none">COIN</span>
      </div>
    );
  }

  if (t === "ETSY") {
    return (
      <div className={`rounded-xl bg-[#D5641C] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-xs font-serif italic text-white leading-none font-black">E</span>
      </div>
    );
  }

  if (t === "LMT") {
    return (
      <div className={`rounded-xl bg-[#002D62] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[9px] font-sans font-black tracking-tight text-white leading-none">LMT</span>
      </div>
    );
  }

  if (t === "XOM") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[9px] font-sans font-black tracking-tight text-[#EC1C24] leading-none">X<span className="text-[#0054A6]">on</span></span>
      </div>
    );
  }

  if (t === "CVX") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%] fill-none">
          <path d="M 15,20 L 50,50 L 85,20" stroke="#0054A6" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 15,45 L 50,75 L 85,45" stroke="#EC1C24" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (t === "CAT") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%]">
          <polygon points="15,68 50,88 85,68" className="fill-[#FFCD00]" />
          <text x="50" y="48" dominantBaseline="middle" textAnchor="middle" className="fill-white font-sans font-black text-4xl tracking-tighter">CAT</text>
        </svg>
      </div>
    );
  }

  if (t === "BUD") {
    return (
      <div className={`rounded-xl bg-[#A81E2E] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-serif font-black text-white leading-none">A-B</span>
      </div>
    );
  }

  if (t === "ADS") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-white">
          <path d="M 20,80 L 35,80 L 15,35 L 0,35 Z" />
          <path d="M 45,80 L 60,80 L 35,22 L 20,22 Z" />
          <path d="M 70,80 L 85,80 L 55,10 L 40,10 Z" />
        </svg>
      </div>
    );
  }

  if (t === "PUM") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[9px] font-sans font-black italic tracking-tighter text-white leading-none">PUMA</span>
      </div>
    );
  }

  if (t === "ARMCO" || t === "2222") {
    return (
      <div className={`rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex flex-col items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[6.5px] font-sans font-black tracking-[0.05em] text-[#10B981] leading-none uppercase">Aramco</span>
      </div>
    );
  }

  // Brand-accurate custom logos for our 30 new companies
  if (t === "ETH") {
    return (
      <div className={`rounded-xl bg-[#22223b] border border-fuchsia-900 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 fill-fuchsia-400 stroke-[#22223b]" strokeWidth="2">
          <path d="M 50,15 L 75,50 L 50,65 L 25,50 Z Z" />
          <path d="M 50,65 L 75,50 L 50,85 L 25,50 Z Z" className="opacity-70" />
        </svg>
      </div>
    );
  }

  if (t === "SOL") {
    return (
      <div className={`rounded-xl bg-[#141416] border border-teal-900 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-none stroke-teal-400" strokeWidth="8" strokeLinecap="round">
          <path d="M 25,30 H 75" stroke="url(#solGrad1)" />
          <path d="M 25,50 H 75" stroke="url(#solGrad2)" />
          <path d="M 25,70 H 75" stroke="url(#solGrad3)" />
          <defs>
            <linearGradient id="solGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14F195" />
              <stop offset="100%" stopColor="#9945FF" />
            </linearGradient>
            <linearGradient id="solGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9945FF" />
              <stop offset="100%" stopColor="#14F195" />
            </linearGradient>
            <linearGradient id="solGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14F195" />
              <stop offset="100%" stopColor="#9945FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (t === "DOGE") {
    return (
      <div className={`rounded-xl bg-[#C2A633] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-sm font-black text-white font-sans leading-none">Ð</span>
      </div>
    );
  }

  if (t === "UBER") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[9px] font-sans font-black tracking-widest text-white leading-none">UBER</span>
      </div>
    );
  }

  if (t === "BAC") {
    return (
      <div className={`rounded-xl bg-[#0A2F7C] flex flex-col items-center justify-center p-1 shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 stroke-white" strokeWidth="10" fill="none">
          <line x1="20" y1="30" x2="80" y2="30" stroke="#E31B23" />
          <line x1="20" y1="50" x2="80" y2="50" />
          <line x1="20" y1="70" x2="80" y2="70" stroke="#E31B23" />
        </svg>
      </div>
    );
  }

  if (t === "LLY") {
    return (
      <div className={`rounded-xl bg-[#D42227] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-serif italic text-white leading-none font-bold">Lilly</span>
      </div>
    );
  }

  if (t === "JNJ") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[9px] font-sans font-black italic text-[#D42227] leading-none">J&J</span>
      </div>
    );
  }

  if (t === "PG") {
    return (
      <div className={`rounded-xl bg-[#004C97] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-bold text-white leading-none">P&G</span>
      </div>
    );
  }

  if (t === "MA") {
    return (
      <div className={`rounded-xl bg-[#1A1A1E] border border-slate-800 flex items-center justify-center p-1.5 shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="40" cy="50" r="28" fill="#EB001B" opacity="0.85" />
          <circle cx="60" cy="50" r="28" fill="#F79E1B" opacity="0.85" />
        </svg>
      </div>
    );
  }

  if (t === "T") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[60%] w-[60%] fill-none stroke-[#00A6CA]" strokeWidth="6">
          <circle cx="50" cy="50" r="35" strokeDasharray="6 3 9 3" />
          <circle cx="50" cy="50" r="25" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }

  if (t === "VZ") {
    return (
      <div className={`rounded-xl bg-black border border-slate-850 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-xs font-sans font-black italic text-red-600 leading-none">V<span className="text-white">z</span></span>
      </div>
    );
  }

  if (t === "NVO") {
    return (
      <div className={`rounded-xl bg-[#0F2A4A] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[8px] font-sans font-bold text-sky-300 leading-none">NOVO</span>
      </div>
    );
  }

  if (t === "PFE") {
    return (
      <div className={`rounded-xl bg-[#1A428A] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-[55%] w-[55%] stroke-white fill-none" strokeWidth="8">
          <ellipse cx="50" cy="50" rx="35" ry="18" strokeDasharray="14 6" />
        </svg>
      </div>
    );
  }

  if (t === "MRK") {
    return (
      <div className={`rounded-xl bg-[#007A87] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-white">
          <polygon points="50,15 78,35 68,68 32,68 22,35" />
        </svg>
      </div>
    );
  }

  if (t === "TGT") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1.5 shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-[#E1251B]" strokeWidth="12" fill="none">
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="14" fill="#E1251B" stroke="none" />
        </svg>
      </div>
    );
  }

  if (t === "GM") {
    return (
      <div className={`rounded-xl bg-[#0068B3] flex flex-col items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-bold text-white leading-none border-b border-white pb-[1px]">GM</span>
      </div>
    );
  }

  if (t === "RACE") {
    return (
      <div className={`rounded-xl bg-[#FFF200] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-xs font-serif font-black italic text-black leading-none">F</span>
      </div>
    );
  }

  if (t === "BA") {
    return (
      <div className={`rounded-xl bg-[#0033A0] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-white">
          <polygon points="20,50 80,42 60,65" />
          <circle cx="45" cy="45" r="12" fill="none" stroke="white" strokeWidth="4" />
        </svg>
      </div>
    );
  }

  if (t === "HON") {
    return (
      <div className={`rounded-xl bg-red-650 flex items-center justify-center shrink-0 shadow-sm ${className} bg-[#E31B23]`}>
        <span className="text-[9px] font-sans font-black tracking-tight text-white leading-none">HON</span>
      </div>
    );
  }

  if (t === "SHEL") {
    return (
      <div className={`rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 fill-[#FFCD00] stroke-[#DD1D21]" strokeWidth="8">
          <path d="M 50,15 C 30,30 20,50 20,80 L 80,80 C 80,50 70,30 50,15 Z" />
        </svg>
      </div>
    );
  }

  if (t === "SAP") {
    return (
      <div className={`rounded-xl bg-[#004B87] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[8px] font-black italic text-white leading-none">SAP</span>
      </div>
    );
  }

  if (t === "AXP") {
    return (
      <div className={`rounded-xl bg-[#008FCE] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[9px] font-bold text-white leading-none">AMEX</span>
      </div>
    );
  }

  if (t === "MSTR") {
    return (
      <div className={`rounded-xl bg-slate-900 border border-amber-900/50 flex flex-col items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[7.5px] font-bold text-amber-500 font-mono leading-none">MSTR</span>
      </div>
    );
  }

  if (t === "DE") {
    return (
      <div className={`rounded-xl bg-[#367C2B] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 fill-[#FFDE00]">
          <path d="M 20,30 L 70,30 L 60,50 L 80,45 L 60,70 L 25,60 Z" />
        </svg>
      </div>
    );
  }

  if (t === "LVMH") {
    return (
      <div className={`rounded-xl bg-black border border-slate-800 flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[9px] font-serif font-black tracking-tighter text-amber-200 leading-none">LVMH</span>
      </div>
    );
  }

  if (t === "WFC") {
    return (
      <div className={`rounded-xl bg-[#D31145] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[10px] font-sans font-black text-[#F4B223] leading-none">WFC</span>
      </div>
    );
  }

  if (t === "SPOT") {
    return (
      <div className={`rounded-xl bg-[#1ED760] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <svg viewBox="0 0 100 100" className="h-3/5 w-3/5 stroke-black stroke-[8] fill-none" strokeLinecap="round">
          <path d="M 25,40 A 35,35 0 0,1 75,40" />
          <path d="M 33,55 A 25,25 0 0,1 67,55" strokeWidth="6" />
          <path d="M 40,70 A 15,15 0 0,1 60,70" strokeWidth="5" />
        </svg>
      </div>
    );
  }

  if (t === "ABNB") {
    return (
      <div className={`rounded-xl bg-[#FF5A5F] flex items-center justify-center shrink-0 shadow-md ${className}`}>
        <svg viewBox="0 0 100 100" className="h-1/2 w-1/2 stroke-white fill-none" strokeWidth="8" strokeLinecap="round">
          <path d="M 50,20 C 35,35 30,55 50,80 C 70,55 65,35 50,20 Z" />
          <circle cx="50" cy="50" r="8" fill="white" />
        </svg>
      </div>
    );
  }

  if (t === "PYPL") {
    return (
      <div className={`rounded-xl bg-[#003087] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-xs font-black italic text-sky-400 tracking-tighter leading-none">P<span className="text-white">P</span></span>
      </div>
    );
  }

  if (t === "TXN") {
    return (
      <div className={`rounded-xl bg-[#E31B23] flex items-center justify-center shrink-0 shadow-sm ${className}`}>
        <span className="text-[9px] font-mono font-black text-white leading-none">TXN</span>
      </div>
    );
  }


  if (t === "ARMCO" || t === "2222") {
    return (
      <div className={`rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex flex-col items-center justify-center shrink-0 shadow-md ${className}`}>
        <span className="text-[6.5px] font-sans font-black tracking-[0.05em] text-[#10B981] leading-none uppercase">Aramco</span>
      </div>
    );
  }


  // Fallback themed coloring for additional companies or any typed in tickers
  const charCode = t.charCodeAt(0) || 65;
  const hues = [
    "bg-sky-950/80 text-sky-400 border-sky-800/40",
    "bg-purple-950/80 text-purple-400 border-purple-800/40",
    "bg-emerald-950/80 text-emerald-400 border-emerald-800/40",
    "bg-indigo-950/80 text-indigo-400 border-indigo-800/40",
    "bg-rose-950/80 text-rose-400 border-rose-800/40",
    "bg-amber-950/80 text-amber-400 border-amber-800/40",
    "bg-teal-950/80 text-teal-400 border-teal-800/40",
    "bg-cyan-950/80 text-cyan-400 border-cyan-800/40",
    "bg-fuchsia-950/80 text-fuchsia-400 border-fuchsia-800/40",
    "bg-violet-950/80 text-violet-400 border-violet-800/40",
  ];
  const selectedHue = hues[charCode % hues.length];

  return (
    <div className={`rounded-xl border flex items-center justify-center shrink-0 shadow-sm font-semibold ${selectedHue} ${className}`}>
      <span className="text-[10px] font-bold tracking-tight font-mono">{t.substring(0, 3)}</span>
    </div>
  );
}

interface TickerProfile {
  ticker: string;
  name: string;
  category: "Stock" | "Crypto" | "Hot";
  isProfitable: boolean;
  defaultState: "Up" | "Down";
}

interface TickerSidebarProps {
  currentTicker: string;
  onSelect: (ticker: string) => void;
  timeframe: string;
  setTimeframe: (tf: string) => void;
  loading: boolean;
}

const PRESETS: TickerProfile[] = [
  { ticker: "BTC", name: "Bitcoin USD", category: "Crypto", isProfitable: true, defaultState: "Up" },
  { ticker: "ETH", name: "Ethereum", category: "Crypto", isProfitable: true, defaultState: "Up" },
  { ticker: "AAPL", name: "Apple Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "MSFT", name: "Microsoft", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "NVDA", name: "NVIDIA Corp.", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "GOOG", name: "Alphabet (Google)", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "AMZN", name: "Amazon.com, Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "META", name: "Meta Platforms, Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "TSLA", name: "Tesla Inc.", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "NFLX", name: "Netflix, Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SBUX", name: "Starbucks Corp.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "DIS", name: "The Walt Disney Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "WMT", name: "Walmart Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "KO", name: "Coca-Cola Company", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PEP", name: "PepsiCo, Inc.", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "MCD", name: "McDonald's Corp.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "YUM", name: "Yum! Brands (KFC)", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "CHZ", name: "Cheezious Corp.", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "NKE", name: "Nike, Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ADS", name: "adidas AG", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PUM", name: "Puma SE", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "TM", name: "Toyota Motor", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "HMC", name: "Honda Motor", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "F", name: "Ford Motor Company", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "GM", name: "General Motors Company", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "RACE", name: "Ferrari N.V.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SPOT", name: "Spotify Technology", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "UBER", name: "Uber Technologies", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "ABNB", name: "Airbnb, Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PYPL", name: "PayPal Holdings", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "V", name: "Visa Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "MA", name: "Mastercard Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "AXP", name: "American Express", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "JPM", name: "JPMorgan Chase & Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "BAC", name: "Bank of America", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "WFC", name: "Wells Fargo & Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "LLY", name: "Eli Lilly & Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "NVO", name: "Novo Nordisk A/S", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "JNJ", name: "Johnson & Johnson", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PFE", name: "Pfizer Inc.", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "MRK", name: "Merck & Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PG", name: "Procter & Gamble", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "TGT", name: "Target Corporation", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "COST", name: "Costco Wholesale Corp.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "HD", name: "Home Depot Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "LOW", name: "Lowe's Companies", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "XOM", name: "Exxon Mobil Corp.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "CVX", name: "Chevron Corporation", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SHEL", name: "Shell plc", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ARMCO", name: "Saudi Arabian Oil Co.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "TSM", name: "TSMC Semiconductor", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ASML", name: "ASML Holding N.V.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "AMD", name: "Advanced Micro Devices", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "AVGO", name: "Broadcom Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "QCOM", name: "Qualcomm Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "INTC", name: "Intel Corporation", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "TXN", name: "Texas Instruments", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "PLTR", name: "Palantir Technologies", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ADBE", name: "Adobe Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "CRM", name: "Salesforce Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ORCL", name: "Oracle Corporation", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "IBM", name: "IBM Corporation", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SAP", name: "SAP SE", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SONY", name: "Sony Group Corp.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "BA", name: "The Boeing Company", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "LMT", name: "Lockheed Martin", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "CAT", name: "Caterpillar Inc.", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "GE", name: "GE Aerospace", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "HON", name: "Honeywell Int'l", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "DE", name: "Deere & Company", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "MSTR", name: "MicroStrategy Inc.", category: "Hot", isProfitable: true, defaultState: "Up" },
  { ticker: "SOL", name: "Solana USD", category: "Crypto", isProfitable: true, defaultState: "Up" },
  { ticker: "DOGE", name: "Dogecoin USD", category: "Crypto", isProfitable: true, defaultState: "Down" },
  { ticker: "T", name: "AT&T Inc.", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "VZ", name: "Verizon Communications", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "LVMH", name: "LVMH Moët Hennessy", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "RIVN", name: "Rivian Automotive", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "NIO", name: "Nio Limited", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "SNAP", name: "Snap Inc. (Snapchat)", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "BYND", name: "Beyond Meat", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "LCID", name: "Lucid Group, Inc.", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "PTON", name: "Peloton Interactive", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "U", name: "Unity Software Inc.", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "SQ", name: "Block Inc. (Square)", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "COIN", name: "Coinbase Global", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "ETSY", name: "Etsy, Inc.", category: "Stock", isProfitable: true, defaultState: "Down" },
  { ticker: "BUD", name: "Anheuser-Busch InBev", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "GS", name: "Goldman Sachs Group", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "MS", name: "Morgan Stanley", category: "Stock", isProfitable: true, defaultState: "Up" },
  { ticker: "SPCE", name: "Virgin Galactic", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "PLUG", name: "Plug Power Inc.", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "NKLA", name: "Nikola Corporation", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "QS", name: "QuantumScape Corp.", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "AMC", name: "AMC Entertainment", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "AI", name: "C3.ai, Inc.", category: "Stock", isProfitable: false, defaultState: "Down" },
  { ticker: "RDFN", name: "Redfin Corporation", category: "Stock", isProfitable: false, defaultState: "Down" },
];

export default function TickerSidebar({
  currentTicker,
  onSelect,
  timeframe,
  setTimeframe,
  loading,
}: TickerSidebarProps) {
  return (
    <div className="w-full md:w-80 shrink-0 border-r border-slate-800/60 bg-[#0F1218] p-6 flex flex-col gap-6">
      
      {/* Timeframe selector section */}
      <div>
        <label className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase block mb-3">
          Analysis Timeline
        </label>
        <div className="grid grid-cols-3 gap-2 bg-[#0A0C10] p-1 rounded-lg border border-slate-800/80">
          {["7 days", "14 days", "30 days"].map((tf) => (
            <button
              key={tf}
              type="button"
              disabled={loading}
              onClick={() => setTimeframe(tf)}
              className={`text-xs py-1.5 px-2 rounded-md font-medium capitalize transition cursor-pointer ${
                timeframe === tf
                  ? "bg-[#1A1D23] text-white shadow-sm border border-slate-700/60"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tf.replace(" days", "D")}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-slate-500 mt-2 font-sans italic leading-relaxed">
          Retrieves search insights spanning the chosen interval prior to forecasting.
        </p>
      </div>

      <hr className="border-slate-800/60" />

      {/* Preset Tickers list */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
            Sectors & Presets
          </label>
          <span className="flex items-center gap-1 text-[10px] text-indigo-400 font-medium">
            <Sparkles className="h-3 w-3" />
            Groundable
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {PRESETS.map((p) => {
            const isSelected = currentTicker === p.ticker;
            return (
              <button
                key={p.ticker}
                type="button"
                disabled={loading}
                onClick={() => onSelect(p.ticker)}
                className={`w-full text-left p-3 rounded-xl transition flex items-center justify-between group cursor-pointer border ${
                  isSelected
                    ? "bg-[#15181E] border-indigo-500/70 text-white"
                    : "bg-[#15181E]/40 hover:bg-[#15181E] border-slate-800/80 text-slate-300 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CompanyLogo ticker={p.ticker} className="h-8 w-8" />
                  <div>
                    <h4 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
                      {p.ticker}
                    </h4>
                    <span className="text-xs text-slate-450 truncate block max-w-[130px] font-sans mt-0.5">
                      {p.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  {/* Glowing actively pulsing signal light indicator showing UP/DOWN predictions */}
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-mono font-black border tracking-wider leading-none select-none ${
                    p.defaultState === "Up"
                      ? "bg-emerald-950/50 text-emerald-400 border-emerald-900/40"
                      : "bg-rose-950/50 text-rose-450 border-rose-900/40"
                  }`}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        p.defaultState === "Up" ? "bg-emerald-400" : "bg-rose-500"
                      }`}></span>
                      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                        p.defaultState === "Up" ? "bg-emerald-450 shadow-[0_0_6px_#10B981]" : "bg-rose-500 shadow-[0_0_6px_#EF4444]"
                      }`}></span>
                    </span>
                    <span>{p.defaultState.toUpperCase()}</span>
                  </div>

                  <span className={`text-[9px] font-mono tracking-wider font-bold px-1.5 py-0.5 rounded leading-none ${
                    p.category === "Hot" 
                      ? "bg-amber-955/50 text-amber-400 border border-amber-900/40"
                      : p.category === "Crypto"
                      ? "bg-purple-955/50 text-purple-400 border border-purple-900/40"
                      : "bg-slate-900 text-slate-400 border border-slate-800"
                  }`}>
                    {p.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl bg-[#15181E] p-4 border border-slate-800 space-y-3">
        <div>
          <h5 className="text-xs font-bold text-slate-200 mb-1 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-indigo-400" />
            Pro Investor Note
          </h5>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
            Grounding queries capture live SEC filings, product filings, and investor updates directly to deliver factual context.
          </p>
        </div>
        <div className="pt-2.5 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-500 font-bold uppercase">Dynamic Feed</span>
            <span className="text-emerald-450 flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              UPDATED EVERY DAY
            </span>
          </div>
          <p className="text-[10px] text-slate-500 font-sans mt-1 leading-relaxed">
            AI prediction runs are synchronized and updated automatically every 24 hours at 00:00 UTC to maintain absolute consistency.
          </p>
        </div>
      </div>

    </div>
  );
}

