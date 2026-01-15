
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export const ThinkingChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || '' });

      console.log('Sending request to Gemini...');
      const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      });

      console.log('Gemini Response:', response);
      const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error: any) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'model', content: `SYSTEM ERROR: ${error.message || "Failed to process request."}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
            <div className="w-16 h-16 rounded-full bg-azure-500/10 flex items-center justify-center border border-azure-500/20">
              <span className="text-2xl">🧠</span>
            </div>
            <p className="text-center max-w-sm">Ask me about complex cloud architectures, cost optimizations, or resilience strategies. I'll use deep reasoning to provide answers.</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-azure-600 text-white' : 'bg-slate-800 text-slate-200 border border-white/5'}`}>
              <div className="text-[10px] uppercase font-bold tracking-widest mb-1 opacity-50">{m.role === 'user' ? 'Architect' : 'Gemini 3 Pro (Deep Thinking)'}</div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-4 rounded-2xl border border-white/5 animate-pulse flex items-center space-x-2">
              <div className="w-2 h-2 bg-azure-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-azure-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-azure-500 rounded-full animate-bounce delay-200"></div>
              <span className="text-xs text-slate-500 ml-2 font-mono uppercase tracking-tighter">Analyzing complex vectors...</span>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Query deep architectural reasoning..."
          className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-azure-500/50 transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-azure-600 hover:bg-azure-500 disabled:opacity-50 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-azure-900/40"
        >
          EXECUTE
        </button>
      </form>
    </div>
  );
};
