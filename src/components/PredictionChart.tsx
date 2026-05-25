import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ReferenceLine,
} from "recharts";
import { HistoricalDataPoint } from "../types";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

interface PredictionChartProps {
  historicalData: HistoricalDataPoint[];
  currentPrice: number;
  targetPriceMin: number;
  targetPriceMax: number;
  ticker: string;
}

export default function PredictionChart({
  historicalData,
  currentPrice,
  targetPriceMin,
  targetPriceMax,
  ticker,
}: PredictionChartProps) {
  
  // Format data for chart representing history and forecasting range
  const chartData = useMemo(() => {
    if (!historicalData || historicalData.length === 0) return [];

    // Map historical prices into formatted array
    const sortedHistory = [...historicalData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const historyMapped = sortedHistory.map((pt, index) => ({
      name: pt.date,
      price: Number(pt.price),
      type: "Historical",
      isFuture: false,
    }));

    // Generate 3 future steps for the forecasting corridor
    const lastHistoryPoint = historyMapped[historyMapped.length - 1];
    const lastPrice = lastHistoryPoint ? lastHistoryPoint.price : currentPrice;

    const steps = [
      { name: "T+10d", price: lastPrice, rangeHigh: lastPrice, rangeLow: lastPrice, type: "Projection", isFuture: true },
      { 
        name: "T+20d", 
        price: lastPrice + (targetPriceMax + targetPriceMin - 2 * lastPrice) / 4, 
        rangeHigh: lastPrice + (targetPriceMax - lastPrice) * 0.5, 
        rangeLow: lastPrice - (lastPrice - targetPriceMin) * 0.5, 
        type: "Projection", 
        isFuture: true 
      },
      { 
        name: "Target (30d)", 
        price: (targetPriceMin + targetPriceMax) / 2, 
        rangeHigh: targetPriceMax, 
        rangeLow: targetPriceMin, 
        type: "Projection", 
        isFuture: true 
      }
    ];

    // Combine standard series with prediction corridor
    return [
      ...historyMapped.map(item => ({
        ...item,
        rangeHigh: undefined,
        rangeLow: undefined,
      })),
      ...steps
    ];
  }, [historicalData, currentPrice, targetPriceMin, targetPriceMax]);

  // Determine pricing metrics
  const minPrice = useMemo(() => {
    const historicalPrices = historicalData.map(d => d.price);
    const overallMin = Math.min(...historicalPrices, targetPriceMin, currentPrice);
    return Math.max(0, Math.floor(overallMin * 0.95));
  }, [historicalData, targetPriceMin, currentPrice]);

  const maxPrice = useMemo(() => {
    const historicalPrices = historicalData.map(d => d.price);
    const overallMax = Math.max(...historicalPrices, targetPriceMax, currentPrice);
    return Math.ceil(overallMax * 1.05);
  }, [historicalData, targetPriceMax, currentPrice]);

  const isUp = (targetPriceMin + targetPriceMax) / 2 >= currentPrice;

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900/95 backdrop-blur-sm">
          <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">{data.name}</p>
          {!data.isFuture ? (
            <div className="mt-1.5">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Close Price</span>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-50">${data.price?.toFixed(2)}</span>
            </div>
          ) : (
            <div className="mt-1.5 space-y-1">
              <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 px-2 py-0.5 rounded uppercase block w-max mb-1">
                AI Prediction Zone
              </span>
              <div className="flex items-center justify-between gap-6 text-xs">
                <span className="text-emerald-500 flex items-center gap-0.5 font-medium">
                  <ArrowUpRight className="h-3.5 w-3.5" /> High:
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">${data.rangeHigh?.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between gap-6 text-xs">
                <span className="text-rose-500 flex items-center gap-0.5 font-medium">
                  <ArrowDownRight className="h-3.5 w-3.5" /> Low:
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">${data.rangeLow?.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between gap-6 text-xs border-t border-slate-150 dark:border-slate-800 pt-1 mt-1 font-sans">
                <span className="text-slate-400">Midpoint:</span>
                <span className="font-bold text-slate-600 dark:text-slate-300">${data.price?.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0F1218] p-6 flex flex-col gap-4 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
            30-Day AI Price Trajectory
          </span>
          <h3 className="font-sans font-bold text-base text-white mt-1">
            Price trajectory for {ticker} (Last 10 sessions + 30-day target area)
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="text-slate-400">Historical Close</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="h-2.5 w-4 rounded bg-emerald-950/20 border border-dashed border-emerald-500" />
            <span className="text-[#10B981]">AI Predictive Cone</span>
          </div>
        </div>
      </div>

      <div className="h-72 w-full mt-2 bg-[#15181E] rounded-xl border border-slate-800/40 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 12, right: 12, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorPredict" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isUp ? "#10b981" : "#f43f5e"} stopOpacity={0.2} />
                <stop offset="95%" stopColor={isUp ? "#10b981" : "#f43f5e"} stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#2D3748" />
            
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              fontSize={10}
              fontFamily="monospace"
              tickLine={false}
              axisLine={false}
              dy={10}
            />

            <YAxis
              stroke="#94a3b8"
              fontSize={10}
              fontFamily="monospace"
              tickLine={false}
              axisLine={false}
              domain={[minPrice, maxPrice]}
              tickFormatter={(val) => `$${val}`}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Price line for history */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4f46e5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPrice)"
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {/* Range Area for Prediction corridor */}
            <Area
              type="monotone"
              dataKey="rangeHigh"
              stroke={isUp ? "#10b981" : "#f43f5e"}
              strokeWidth={2}
              strokeDasharray="4 4"
              fill="url(#colorPredict)"
              connectNulls
            />

            <Area
              type="monotone"
              dataKey="rangeLow"
              stroke={isUp ? "#10b981" : "#f43f5e"}
              strokeWidth={2}
              strokeDasharray="4 4"
              fill="none"
              connectNulls
            />

            {/* Reference Line indicating present boundary */}
            <ReferenceLine
              x={historicalData[historicalData.length - 1]?.date}
              stroke="#94a3b8"
              strokeDasharray="3 3"
              label={{
                value: "Present",
                position: "top",
                fill: "#94a3b8",
                fontSize: 10,
                fontFamily: "monospace"
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-4 mt-1">
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">Current Price</span>
          <span className="text-base font-bold text-white">${currentPrice?.toFixed(2)}</span>
        </div>
        <div className="text-center bg-emerald-950/20 rounded-xl p-2 border border-emerald-900/30">
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block flex items-center justify-center gap-0.5 mb-1">
            <ArrowUpRight className="h-3 w-3" /> Bullish Target
          </span>
          <span className="text-base font-black text-emerald-400">${targetPriceMax?.toFixed(2)}</span>
        </div>
        <div className="text-center bg-rose-950/20 rounded-xl p-2 border border-rose-900/30">
          <span className="text-[10px] font-mono text-rose-450 font-bold uppercase tracking-widest block flex items-center justify-center gap-0.5 mb-1">
            <ArrowDownRight className="h-3 w-3" /> Bearish Target
          </span>
          <span className="text-base font-black text-rose-400">${targetPriceMin?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
