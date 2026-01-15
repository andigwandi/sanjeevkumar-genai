
import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ThinkingChat } from './components/ThinkingChat';
import { ImageEditor } from './components/ImageEditor';
import { VeoGenerator } from './components/VeoGenerator';
import { CloudConsultant } from './components/CloudConsultant';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { IMPACT_STORIES, TECH_STACK } from './constants';

const App: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'thinking' | 'edit' | 'video' | 'consultant'>('thinking');

  return (
    <div className="min-h-screen selection:bg-azure-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-azure-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-azure-900/40">S</div>
            <span className="text-xl font-extrabold tracking-tighter text-slate-200 uppercase">SANJEEV <span className="text-azure-500">KUMAR</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#infrastructure" className="hover:text-azure-400 transition-colors">Infrastructure</a>
            <a href="#impact" className="hover:text-azure-400 transition-colors">Impact</a>
            <a href="#evolution" className="hover:text-azure-400 transition-colors">Evolution</a>
            <a href="#architecture" className="hover:text-azure-400 transition-colors">Showcase</a>
            <a href="#ailab" className="hover:text-azure-400 transition-colors">AI Lab</a>
          </div>
          <a href="mailto:sanjeev123kumar@hotmail.com" className="px-5 py-2 bg-azure-600 hover:bg-azure-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-azure-900/30">
            Connect
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="infrastructure" className="relative pt-24 pb-32 px-6 overflow-hidden">
          <div className="scanline"></div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-azure-500/10 border border-azure-500/20 text-azure-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-azure-500"></span>
                </span>
                <span>Manager / Specialist Cloud & DevOps</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure-400 to-azure-600">CRITICAL</span> AUTOMATION.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
                Optimizing and elevating global businesses through next-generation cloud architecture and resilient engineering.
              </p>

              <div className="flex flex-wrap gap-3 mb-16">
                {TECH_STACK.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-slate-900/50 border border-white/5 rounded-md text-slate-300 text-xs font-mono hover:border-azure-500/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">$22B+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Transaction Capacity</div>
                </div>
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">18+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Years Engineering</div>
                </div>
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">80%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Automation Gain</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <Terminal />
            </div>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-azure-600/5 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* The $22B Impact & Automation Section */}
        <section id="impact" className="py-24 px-6 bg-slate-950/50 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">THE <span className="text-azure-500">$22B</span> IMPACT.</h2>
              <p className="text-slate-400 max-w-2xl text-lg font-light">High-stakes infrastructure requires absolute resilience. Here is how I deliver scale and stability.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {IMPACT_STORIES.map((story) => (
                <div key={story.id} className="group glass p-10 rounded-3xl border-white/5 hover:border-azure-500/30 transition-all hover:bg-slate-900/40">
                  <div className="text-azure-500 text-4xl font-black mb-6 font-mono tracking-tighter group-hover:scale-110 transition-transform origin-left">{story.metric}</div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-[0.2em] text-azure-400/60 px-2 py-1 bg-azure-500/5 rounded border border-azure-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evolution Timeline */}
        <section id="evolution" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">EVOLUTION OF A DEVOPS LEADER.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-light">From 2007 foundational engineering to present-day mission-critical management.</p>
            </div>
            <EvolutionTimeline />
          </div>
        </section>

        {/* Architecture Showcase */}
        <section id="architecture" className="py-24 px-6 relative bg-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">BATTLE-TESTED BLUEPRINTS.</h2>
              <p className="text-slate-400 max-w-2xl font-light">Deep-dive into the technical foundations of enterprise systems I have architected.</p>
            </div>
            <ArchitectureShowcase />
          </div>
        </section>

        {/* AI Innovation Lab */}
        <section id="ailab" className="py-24 px-6 relative bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase">AI Innovation Lab.</h2>
                <p className="text-slate-400 font-light max-w-md">Integrating Generative AI into the modern DevOps lifecycle for smarter automation.</p>
              </div>
              <div className="flex flex-wrap gap-2 bg-slate-950/50 p-1 rounded-full border border-white/5">
                {[
                  { id: 'thinking', label: 'Reasoning' },
                  { id: 'consultant', label: 'Consultant' },
                  { id: 'edit', label: 'Visualizer' },
                  { id: 'video', label: 'Motion' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLabTab(tab.id as any)}
                    className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${activeLabTab === tab.id ? 'bg-azure-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2rem] p-2 md:p-8 min-h-[500px] border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-azure-500 to-transparent opacity-20"></div>
              {activeLabTab === 'thinking' && <ThinkingChat />}
              {activeLabTab === 'consultant' && <CloudConsultant />}
              {activeLabTab === 'edit' && <ImageEditor />}
              {activeLabTab === 'video' && <VeoGenerator />}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 glass bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-azure-600 rounded-lg flex items-center justify-center font-black text-white text-xl">S</div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">Sanjeev Kumar</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
              Expert in architecting secure, scalable, and automated cloud ecosystems for global enterprises. Based in Gurugram, India.
            </p>
            <div className="text-xs font-mono text-slate-500">
              sanjeev123kumar@hotmail.com
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600 mb-6">Platforms</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="https://linkedin.com/in/andigwandi" className="hover:text-azure-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/andigwandi" className="hover:text-azure-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600 mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href="mailto:sanjeev123kumar@hotmail.com" className="hover:text-azure-400 transition-colors">Email</a></li>
                {/* <li><a href="#" className="hover:text-azure-400 transition-colors">Resume</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
          <div>&copy; 2026 Sanjeev Kumar. DEV NEW YEAR CHALLENGE.</div>
          <div>BUILD_STATUS: <span className="text-green-500">SUCCESSFUL</span> | INFRA: <span className="text-azure-400">OPTIMIZED</span></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
