
import React from 'react';
import { CAREER_TIMELINE } from '../constants';

export const EvolutionTimeline: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-azure-500/20"></div>
      
      <div className="space-y-16 relative">
        {CAREER_TIMELINE.map((event, index) => (
          <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-1/2"></div>
            
            {/* Dot */}
            <div className="z-20 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-azure-500 shadow-lg shadow-azure-900/20 absolute left-1/2 transform -translate-x-1/2">
               <div className="w-2 h-2 rounded-full bg-azure-500 animate-pulse"></div>
            </div>

            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
              <div className="glass p-6 rounded-2xl border-white/5 hover:border-azure-500/30 transition-all group">
                <span className="text-azure-500 font-mono text-xs font-bold uppercase tracking-widest mb-1 block">
                  {event.year}
                </span>
                <h3 className="text-xl font-black text-white mb-1 group-hover:text-azure-400 transition-colors">
                  {event.role}
                </h3>
                <div className="text-slate-400 text-sm font-bold mb-3">{event.company}</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
