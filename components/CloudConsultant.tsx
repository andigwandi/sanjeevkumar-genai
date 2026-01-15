
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export const CloudConsultant: React.FC = () => {
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are Sanjeev Kumar's personal AI Cloud Consultant. Sanjeev is a Manager/Specialist in Cloud and DevOps at Publicis Sapient with 18 years of experience.
          Key highlights to share:
          - Architected Azure infra for a $22B/year Payment Settlement System.
          - Reduced MTTR by 25% using Azure Chaos Studio.
          - Automated provisioning from 10 days to 2 days using Terraform.
          - Expertise in Azure (Synapse, AKS), Kubernetes, C#, and PowerShell.
          - Based in Gurugram, India.
          Answer questions professionally and concisely, highlighting his technical leadership and mission-critical engineering mindset.`,
          thinkingConfig: { thinkingBudget: 0 }
        },
      });

      setMessages(prev => [...prev, { role: 'model', content: response.text || "I'm currently optimizing my circuits. Please try again." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Connection interrupted. Sanjeev's infrastructure is safe, but my response module is resetting." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
             <div className="w-16 h-16 rounded-full bg-azure-500/10 flex items-center justify-center border border-azure-500/20">
               <span className="text-2xl">🤖</span>
             </div>
             <p className="text-center max-w-sm font-mono text-sm uppercase tracking-tight">AI Cloud Consultant Online</p>
             <p className="text-center max-w-sm text-xs">Ask me about Sanjeev's role in the $22B project, his 18-year career evolution, or his approach to resilience engineering.</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-azure-600 text-white' : 'bg-slate-900/80 text-slate-200 border border-white/5'}`}>
              <div className="text-[10px] uppercase font-bold tracking-widest mb-1 opacity-50">{m.role === 'user' ? 'Inquiry' : 'Cloud Consultant'}</div>
              <p className="text-sm leading-relaxed">{m.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5 animate-pulse flex items-center space-x-2">
              <span className="text-xs text-azure-400 font-mono uppercase tracking-tighter">Querying Career Data...</span>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 flex space-x-2 bg-slate-950/30">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my Azure expertise..."
          className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-azure-500/50 transition-colors placeholder:text-slate-600"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-azure-600 hover:bg-azure-500 disabled:opacity-50 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg"
        >
          SEND
        </button>
      </form>
    </div>
  );
};
