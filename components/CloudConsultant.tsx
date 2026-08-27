import React, { useState, useRef, useEffect } from 'react';

const CONSULTANT_QUESTIONS = [
  "What is Sanjeev's role & impact on Project Slingshot?",
  "How did Sanjeev architect the $22B payment settlement platform?",
  "What are Sanjeev's core technical competencies and tools?",
  "How to contact or interview Sanjeev for senior Cloud leadership?"
];

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

  const executeQuery = async (queryText: string) => {
    if (!queryText.trim() || loading) return;

    const userMessage = queryText.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server error occurred while consulting.');
      }

      setMessages(prev => [...prev, { role: 'model', content: data.text || "I'm currently optimizing my circuits. Please try again." }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: `Notice: ${error.message || "Failed to reach AI Cloud Consultant."}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeQuery(input);
  };

  return (
    <div className="flex flex-col h-[520px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-6 py-6">
            <div className="w-16 h-16 rounded-2xl bg-azure-500/10 flex items-center justify-center border border-azure-500/20 shadow-inner">
              <span className="text-3xl">🤖</span>
            </div>
            <div className="text-center max-w-lg">
              <h4 className="text-white font-bold text-base mb-1">AI Cloud Career Consultant</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Ask about Sanjeev's 19+ years of cloud leadership, $22B payment platform engineering, Project Slingshot, and core competencies.
              </p>
            </div>

            <div className="w-full max-w-xl">
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2.5 text-center">Frequently Asked Career Questions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CONSULTANT_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => executeQuery(q)}
                    disabled={loading}
                    className="text-left text-xs text-slate-300 bg-slate-900/60 hover:bg-azure-950/40 border border-white/5 hover:border-azure-500/30 p-3 rounded-xl transition-all"
                  >
                    💬 {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] p-5 rounded-2xl ${m.role === 'user' ? 'bg-azure-600 text-white shadow-lg shadow-azure-950/50' : 'bg-slate-900 text-slate-200 border border-white/10 shadow-xl'}`}>
              <div className="text-[10px] uppercase font-mono font-bold tracking-widest mb-2 opacity-60 flex items-center gap-1.5">
                <span>{m.role === 'user' ? '👤 Inquiry' : '🛡️ Cloud Consultant'}</span>
              </div>
              <div className="whitespace-pre-wrap text-xs md:text-sm leading-relaxed font-sans">
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 flex items-center space-x-3 shadow-lg">
              <div className="w-2 h-2 bg-azure-400 rounded-full animate-ping"></div>
              <span className="text-xs text-azure-300 font-mono tracking-tight">Accessing engineering dossiers & career milestones...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about Sanjeev's Azure expertise, Project Slingshot, or background..."
          className="flex-1 bg-black/50 border border-white/10 rounded-full px-5 py-3 text-xs md:text-sm focus:outline-none focus:border-azure-500/60 transition-colors text-white placeholder:text-slate-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-azure-600 hover:bg-azure-500 disabled:opacity-40 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-azure-900/40"
        >
          {loading ? 'Consulting...' : 'Ask'}
        </button>
      </form>
    </div>
  );
};
