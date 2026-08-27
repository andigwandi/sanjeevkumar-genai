
import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ThinkingChat } from './components/ThinkingChat';
import { ImageEditor } from './components/ImageEditor';
import { VeoGenerator } from './components/VeoGenerator';
import { CloudConsultant } from './components/CloudConsultant';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { IMPACT_STORIES, TECH_STACK, PROFILE, CORE_COMPETENCIES, EDUCATION, CERTIFICATIONS, APP_VERSION } from './constants';

const App: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'thinking' | 'edit' | 'video' | 'consultant'>('thinking');

  return (
    <div className="min-h-screen selection:bg-azure-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-azure-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-azure-900/40">S</div>
            <div>
              <span className="text-lg font-black tracking-tighter text-slate-200 uppercase block leading-none">
                SANJEEV<span className="text-azure-500">KUMAR</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">Cloud & DevOps Specialist</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#infrastructure" className="hover:text-azure-400 transition-colors">Infrastructure</a>
            <a href="#competencies" className="hover:text-azure-400 transition-colors">Competencies</a>
            <a href="#impact" className="hover:text-azure-400 transition-colors">Impact</a>
            <a href="#evolution" className="hover:text-azure-400 transition-colors">Evolution</a>
            <a href="#architecture" className="hover:text-azure-400 transition-colors">Showcase</a>
            <a href="#ailab" className="hover:text-azure-400 transition-colors">AI Lab</a>
          </div>
          <a href={`mailto:${PROFILE.email}`} className="px-5 py-2 bg-azure-600 hover:bg-azure-500 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-lg shadow-azure-900/30">
            Connect
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="infrastructure" className="relative pt-20 pb-28 px-6 overflow-hidden">
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
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
                {PROFILE.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10 text-xs font-mono text-slate-400 bg-slate-950/40 p-4 rounded-2xl border border-white/5 max-w-2xl">
                <span>📍 {PROFILE.location}</span>
                <span className="text-slate-700">|</span>
                <span>📞 {PROFILE.phone}</span>
                <span className="text-slate-700">|</span>
                <span>✉️ {PROFILE.email}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {TECH_STACK.map(tech => (
                  <span key={tech} className="px-3.5 py-1.5 bg-slate-900/60 border border-white/10 rounded-md text-slate-300 text-xs font-mono hover:border-azure-500/40 hover:text-azure-400 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">$22B+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Transaction Platform</div>
                </div>
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">{PROFILE.experienceYears} Years</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Expertise & Leadership</div>
                </div>
                <div className="border-l-2 border-azure-600 pl-6">
                  <div className="text-3xl font-black text-white tracking-tighter">75%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Provisioning Acceleration</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <Terminal />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-azure-600/5 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* Core Competencies Section */}
        <section id="competencies" className="py-20 px-6 bg-slate-950/80 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-white mb-3 tracking-tighter">CORE COMPETENCIES.</h2>
              <p className="text-slate-400 max-w-2xl font-light">Deep engineering specialization across modern orchestration, vector databases, IaC, and security compliance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_COMPETENCIES.map((comp, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-azure-500/30 transition-all group">
                  <div className="text-azure-400 font-mono text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-between">
                    <span>{comp.category}</span>
                    <span className="text-slate-600 font-normal">0{idx + 1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {comp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-black/40 border border-white/10 rounded-lg text-slate-200 text-xs font-mono group-hover:border-azure-500/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The $22B Impact & Automation Section */}
        <section id="impact" className="py-24 px-6 bg-slate-950/50 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">CRITICAL <span className="text-azure-500">IMPACT</span> & AUTOMATION.</h2>
              <p className="text-slate-400 max-w-2xl text-lg font-light">High-stakes enterprise infrastructure requires absolute resilience and speed. Key project achievements:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {IMPACT_STORIES.map((story) => (
                <div key={story.id} className="group glass p-8 rounded-3xl border-white/5 hover:border-azure-500/30 transition-all hover:bg-slate-900/40 flex flex-col justify-between">
                  <div>
                    <div className="text-azure-400 text-3xl font-black mb-4 font-mono tracking-tighter group-hover:scale-105 transition-transform origin-left">{story.metric}</div>
                    <h3 className="text-xl font-black text-white mb-3 leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                      {story.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {story.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-[0.15em] text-azure-400/80 px-2 py-0.5 bg-azure-500/10 rounded border border-azure-500/20">
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
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">CAREER EVOLUTION & LEADERSHIP.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-light">From 2007 foundational software development to present-day enterprise cloud and DevOps leadership.</p>
            </div>
            <EvolutionTimeline />
          </div>
        </section>

        {/* Architecture Showcase */}
        <section id="architecture" className="py-24 px-6 relative bg-slate-950/30">
           <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">BATTLE-TESTED ARCHITECTURES.</h2>
              <p className="text-slate-400 max-w-2xl font-light">Deep-dive into the technical foundations of enterprise multi-cloud systems, financial pipelines, and automation frameworks.</p>
            </div>
            <ArchitectureShowcase />
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-20 px-6 bg-slate-950/60 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-2">
                <span className="text-azure-500">🎓</span> Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-azure-500/20 transition-all">
                    <div className="text-azure-400 font-mono text-xs font-bold mb-1">{item.period}</div>
                    <div className="text-lg font-bold text-white mb-1">{item.degree}</div>
                    <div className="text-slate-400 text-sm flex justify-between">
                      <span>{item.institution}</span>
                      {item.grade && <span className="font-mono text-azure-300">Grade: {item.grade}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-2">
                <span className="text-azure-500">📜</span> Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-azure-500/20 transition-all flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-base mb-1">{cert.name}</div>
                      <div className="text-slate-400 text-xs font-mono">Issuer: {cert.issuer}</div>
                    </div>
                    {cert.year && (
                      <span className="text-xs font-mono text-azure-400 px-3 py-1 bg-azure-500/10 rounded-full border border-azure-500/20">
                        {cert.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Innovation Lab */}
        <section id="ailab" className="py-24 px-6 relative bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase">AI Innovation Lab.</h2>
                  <p className="text-slate-400 font-light max-w-md">Integrating Generative AI into the modern DevOps lifecycle for smarter cloud automation and career insights.</p>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-azure-600 rounded-lg flex items-center justify-center font-black text-white text-xl">S</div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-white uppercase block leading-none">{PROFILE.name}</span>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">{PROFILE.title}</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
              Specializing in Azure Cloud Architecture, Kubernetes, GoLang automation tools, Chaos Engineering, and PCI-DSS compliance.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-slate-400">
              <div>📍 {PROFILE.location}</div>
              <div>📞 {PROFILE.phone}</div>
              <div>✉️ {PROFILE.email}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600 mb-6">Profiles</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href={PROFILE.linkedIn} target="_blank" rel="noreferrer" className="hover:text-azure-400 transition-colors">LinkedIn Profile</a></li>
                <li><a href={PROFILE.gitHub} target="_blank" rel="noreferrer" className="hover:text-azure-400 transition-colors">GitHub Repos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><a href={`mailto:${PROFILE.email}`} className="hover:text-azure-400 transition-colors">Direct Email</a></li>
                <li><a href={`tel:${PROFILE.phone}`} className="hover:text-azure-400 transition-colors">Direct Call</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
           <div>&copy; 2026 Sanjeev Kumar. DEV NEW YEAR CHALLENGE.</div>
           <div className="flex items-center gap-4">
             <span className="font-mono text-azure-400 bg-azure-950/70 border border-azure-800/50 px-2.5 py-1 rounded-md text-[11px] tracking-normal">v{APP_VERSION}</span>
             <div>BUILD_STATUS: <span className="text-green-500">SUCCESSFUL</span> | INFRA: <span className="text-azure-400">OPTIMIZED</span></div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
