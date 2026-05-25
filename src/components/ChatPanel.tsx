import { useState, useRef, useEffect } from "react";
import { Send, Terminal, MessageSquare, Loader2, Sparkles, HelpCircle, ArrowUpRight } from "lucide-react";
import { ChatMessage, SearchSource } from "../types";

interface ChatPanelProps {
  ticker: string;
  loading: boolean;
  onSendQuestion: (q: string) => Promise<{ answer: string; searchSources?: SearchSource[] }>;
}

const SUGGESTED_PROMPTS = [
  "What is the key driver for their growth?",
  "Tell me about their structural risks & competition.",
  "Are there any pending catalysts or lawsuits?",
  "Give me an investment thesis summary.",
];

export default function ChatPanel({ ticker, loading: analysisLoading, onSendQuestion }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom when messages append
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatLoading]);

  const handleSubmit = async (text: string) => {
    if (!text.trim() || chatLoading) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMsg("");
    setChatLoading(true);

    try {
      const res = await onSendQuestion(text);
      
      const aiMsg: ChatMessage = {
        role: "model",
        content: res.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        role: "model",
        content: `Sorry, there was an error analyzing your question. ${err.message || "Please check your network."}`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setChatLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0F1218] overflow-hidden flex flex-col h-[520px] shadow-xl">
      
      {/* Panel header controls */}
      <div className="border-b border-slate-800/80 bg-[#0F1218] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-indigo-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5 tracking-tight">
            AI Analyst Chat Shell
            <span className="text-[10px] bg-[#1A1D23] border border-slate-800 px-2 py-0.5 rounded font-mono uppercase text-slate-400 font-bold">
              {ticker} Context
            </span>
          </h4>
        </div>
        
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="text-[10px] font-mono hover:text-rose-450 text-slate-450 font-bold transition uppercase cursor-pointer"
          >
            Reset Thread
          </button>
        )}
      </div>

      {/* Main logs display */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-[#0A0C10]/20" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-indigo-950/40 flex items-center justify-center text-indigo-400 border border-indigo-505/30">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">
                Interactive Grounded Intelligence
              </h5>
              <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                Ask specific questions about {ticker}&apos;s valuation drivers, earnings expectations, or target multipliers. Answers automatically leverage active search grounding.
              </p>
            </div>

            {/* Prompt options */}
            <div className="w-full max-w-md pt-2">
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-500 text-left uppercase mb-2 tracking-wider">
                <HelpCircle className="h-3.5 w-3.5" />
                SUGGESTED ANALYST QUERIES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                {SUGGESTED_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSubmit(p)}
                    className="text-xs p-3 rounded-xl border border-slate-800 bg-[#15181E]/40 hover:bg-[#15181E] cursor-pointer text-slate-300 hover:text-white transition text-left flex justify-between items-center group font-medium"
                  >
                    <span>{p}</span>
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m, idx) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                    isUser
                      ? "bg-indigo-600 text-white rounded-tr-none shadow-sm font-semibold"
                      : "bg-[#15181E] text-slate-200 rounded-tl-none border border-slate-800/80 whitespace-pre-wrap"
                  }`}>
                    {m.content}
                    {m.timestamp && (
                      <span className={`block text-[9px] font-mono mt-2 text-right tracking-wider ${
                        isUser ? "text-indigo-200" : "text-slate-550"
                      }`}>
                        {m.timestamp}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {chatLoading && (
              <div className="flex gap-3 mr-auto items-center text-xs text-slate-505 font-mono italic animate-pulse">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-400" />
                AI Analyst is querying details...
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input panel block */}
      <div className="p-4 border-t border-slate-800 bg-[#0A0C10]/40">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(inputMsg);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            placeholder={chatLoading ? "Analyst is writing..." : `Ask about ${ticker} (e.g., "is NVDA overvalued?")`}
            disabled={chatLoading}
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="flex-1 rounded-xl border border-slate-800 bg-[#1A1D23] px-4 py-2.5 text-sm text-slate-250 outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={chatLoading || !inputMsg.trim()}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-600 shrink-0 flex items-center justify-center cursor-pointer transition shadow-lg"
          >
            {chatLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>
      </div>

    </div>
  );
}
