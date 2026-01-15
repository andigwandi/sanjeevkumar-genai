
import React, { useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../constants';

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>(['Initializing secure session...', 'Fetching credentials...']);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: any;
    const certLines = CERTIFICATIONS.map(c => `[CERT] ${c.name} - ${c.issuer} (${c.year})`);
    
    let currentLineIndex = 0;
    
    const addLine = () => {
      if (currentLineIndex < certLines.length) {
        setLines(prev => [...prev, certLines[currentLineIndex]]);
        currentLineIndex++;
        timeout = setTimeout(addLine, 600);
      } else {
        setIsTyping(false);
        setLines(prev => [...prev, 'Session active. Monitoring mission-critical systems...']);
      }
    };

    timeout = setTimeout(addLine, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm shadow-2xl rounded-lg overflow-hidden glass border-azure-700/30">
      <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-slate-400 text-xs uppercase tracking-widest">Credentials.sh</div>
      </div>
      <div className="p-6 h-64 overflow-y-auto bg-black/40 text-azure-400 space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-azure-600 mr-2 font-bold font-mono">❯</span>
            <span>{line}</span>
          </div>
        ))}
        {isTyping && (
          <div className="w-2 h-5 bg-azure-400 animate-pulse inline-block ml-1"></div>
        )}
      </div>
    </div>
  );
};
