
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { BusinessSector } from '../types';

interface AIInsightsProps {
  sector: BusinessSector;
}

const AIInsights: React.FC<AIInsightsProps> = ({ sector }) => {
  const [insight, setInsight] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInsight = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a forward-looking insight (approx 60 words) about the future of the ${sector.title} industry. Focus on technological innovation, sustainability, and global impact. Act as an expert strategic advisor for Arnn Group.`,
        config: {
          temperature: 0.7,
        },
      });
      setInsight(response.text || "Unable to generate insights at this time.");
    } catch (err) {
      console.error("Gemini Error:", err);
      setError("Failed to fetch AI insights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sector.id]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-brand font-bold text-slate-900 leading-none">AI Strategic Insight</h4>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Powered by Gemini</span>
          </div>
        </div>
        <button 
          onClick={fetchInsight}
          disabled={loading}
          className="text-blue-700 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50"
        >
          <svg className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="relative flex-grow flex flex-col justify-center">
        {loading ? (
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse w-[90%]"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse w-[95%]"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-sm italic">{error}</p>
        ) : (
          <div className="relative">
            <svg className="absolute -top-4 -left-4 w-8 h-8 text-slate-200 -z-10" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <p className="text-slate-700 leading-relaxed font-medium italic">
              {insight}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <span>Target Markets: Global</span>
          <span>•</span>
          <span>Growth Potential: High</span>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
