export interface HistoricalDataPoint {
  date: string;
  price: number;
  volume?: number;
}

export interface TechnicalIndicators {
  movingAverage?: string;
  rsi?: number;
  volatility?: string;
}

export interface SearchSource {
  title: string;
  url: string;
}

export interface StockAnalysisResponse {
  ticker: string;
  companyName: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  priceState: "Up" | "Down" | "Neutral";
  summary: string;
  historicalData: HistoricalDataPoint[];
  technicalIndicators?: TechnicalIndicators;
  sentiment: string; // e.g., "Strongly Bullish", "Bullish", "Neutral", "Bearish", "Strongly Bearish"
  confidenceScore: number;
  targetPriceMin: number;
  targetPriceMax: number;
  performanceAnalysis: string;
  detailedPrediction: string;
  riskFactors: string[];
  catalysts: string[];
  searchSources?: SearchSource[];
  isFallback?: boolean;
  fallbackReason?: string;
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
  timestamp?: string;
}
