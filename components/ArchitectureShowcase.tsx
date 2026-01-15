
import React, { useState } from 'react';
import { ARCHITECTURES } from '../constants';

export const ArchitectureShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(ARCHITECTURES[0].id);
  const activeArc = ARCHITECTURES.find(a => a.id === activeId)!;

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-2 space-y-4">
        {ARCHITECTURES.map((arc) => (
          <button
            key={arc.id}
            onClick={() => setActiveId(arc.id)}
            className={`w-full text-left p-6 rounded-xl transition-all border ${
              activeId === arc.id
                ? 'bg-azure-600/10 border-azure-500/50 glow-azure shadow-azure-900/20'
                : 'bg-slate-900/50 border-white/5 hover:border-white/20'
            }`}
          >
            <h3 className={`text-xl font-bold mb-2 ${activeId === arc.id ? 'text-azure-400' : 'text-slate-300'}`}>
              {arc.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{arc.description}</p>
          </button>
        ))}
      </div>
      
      <div className="lg:col-span-3 glass rounded-2xl p-8 min-h-[400px] border-azure-700/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none uppercase text-8xl font-black text-azure-500 select-none">
          Blueprint
        </div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <h4 className="text-azure-400 font-mono text-sm mb-2 uppercase tracking-tighter">Current Stack</h4>
            <div className="flex flex-wrap gap-2">
              {activeArc.components.map(comp => (
                <span key={comp} className="px-3 py-1 bg-azure-500/10 border border-azure-500/30 text-azure-400 text-xs rounded-full font-mono">
                  {comp}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
             <h4 className="text-azure-400 font-mono text-sm mb-2 uppercase tracking-tighter">Execution Flow</h4>
             <div className="p-6 bg-black/20 rounded-lg border border-white/5 font-mono text-slate-300 text-sm italic">
                {activeArc.flow.split(' -> ').map((step, i, arr) => (
                  <span key={i}>
                    <span className="text-azure-300 font-bold">{step}</span>
                    {i < arr.length - 1 && <span className="mx-2 text-slate-600">⟶</span>}
                  </span>
                ))}
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {activeArc.components.map((_, i) => (
                  <div key={i} className="h-24 bg-slate-800/40 border border-white/5 rounded flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-12 h-12 rounded bg-azure-500/5 flex items-center justify-center border border-azure-500/10">
                      <div className="w-4 h-4 bg-azure-500/20 rounded-sm"></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
