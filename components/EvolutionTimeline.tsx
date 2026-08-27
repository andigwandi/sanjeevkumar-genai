
import React from 'react';
import { CAREER_TIMELINE } from '../constants';

export const EvolutionTimeline: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Central Line for Desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-azure-500/40 via-azure-500/20 to-transparent"></div>
      
      <div className="space-y-12 relative">
        {CAREER_TIMELINE.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
              {/* Desktop alternating layout */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2 md:text-left'}`}>
                <div className="glass p-6 md:p-8 rounded-3xl border-white/5 hover:border-azure-500/40 transition-all group hover:bg-slate-900/50 shadow-xl">
                  <div className={`flex items-center gap-2 mb-2 flex-wrap ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-azure-400 font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-azure-500/10 rounded-full border border-azure-500/20">
                      {event.year}
                    </span>
                    {event.location && (
                      <span className="text-slate-500 text-xs font-mono">
                        📍 {event.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-azure-400 transition-colors">
                    {event.role}
                  </h3>
                  
                  <div className="text-slate-300 font-semibold text-base mb-2">
                    {event.company}
                  </div>

                  {event.projectName && (
                    <div className="inline-block text-azure-400/90 text-xs font-mono font-bold uppercase tracking-wider mb-3 px-3 py-1 bg-azure-950/60 rounded border border-azure-800/40">
                      {event.projectName}
                    </div>
                  )}

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                    {event.description}
                  </p>

                  {event.highlights && event.highlights.length > 0 && (
                    <ul className={`space-y-2 mb-6 text-xs text-slate-300 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      {event.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed bg-black/20 p-2.5 rounded-xl border border-white/5">
                          <span className="text-azure-400 font-bold mr-1">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {event.skills && event.skills.length > 0 && (
                    <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {event.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 text-slate-400 border border-white/10 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Central Node Dot */}
              <div className="hidden md:flex z-20 items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-azure-500 shadow-lg shadow-azure-900/40 absolute left-1/2 transform -translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-azure-400 animate-pulse"></div>
              </div>

              {/* Spacer for alternating layout */}
              <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

