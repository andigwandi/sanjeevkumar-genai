
import React, { useState, useEffect } from 'react';
import { CERTIFICATIONS, EDUCATION, PROFILE } from '../constants';

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    'Initializing secure session...',
    `[INFO] User: ${PROFILE.name} (${PROFILE.experienceYears} Years Exp)`,
    `[INFO] Role: ${PROFILE.title}`,
    `[INFO] Location: ${PROFILE.location}`,
    'Fetching credentials & academic background...'
  ]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: any;
    const certLines = CERTIFICATIONS.map(c => `[CERT] ${c.name} - ${c.issuer}${c.year ? ` (${c.year})` : ''}`);
    const eduLines = EDUCATION.map(e => `[EDU] ${e.degree} - ${e.institution} (${e.grade || e.period})`);
    const allLogs = [...certLines, ...eduLines];
    
    let currentLineIndex = 0;
    
    const addLine = () => {
      if (currentLineIndex < allLogs.length) {
        setLines(prev => [...prev, allLogs[currentLineIndex]]);
        currentLineIndex++;
        timeout = setTimeout(addLine, 500);
      } else {
        setIsTyping(false);
        setLines(prev => [...prev, 'Session active. Mission-critical systems online.']);
      }
    };

    timeout = setTimeout(addLine, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm shadow-2xl rounded-xl overflow-hidden glass border-azure-700/30">
      <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Credentials & System Profile</div>
      </div>
      <div className="p-5 h-72 overflow-y-auto bg-black/60 text-azure-400 space-y-1.5 text-xs">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-azure-600 mr-2 font-bold font-mono">❯</span>
            <span className="leading-relaxed">{line}</span>
          </div>
        ))}
        {isTyping && (
          <div className="w-2 h-4 bg-azure-400 animate-pulse inline-block ml-1"></div>
        )}
      </div>
    </div>
  );
};

