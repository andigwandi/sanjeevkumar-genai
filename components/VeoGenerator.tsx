
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export const VeoGenerator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const checkAndOpenKey = async () => {
    // Check if running in AI Studio environment
    if ((window as any).aistudio && typeof (window as any).aistudio.hasSelectedApiKey === 'function') {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
      }
    }
    return true;
  };

  const generateVideo = async () => {
    if (!image || loading) return;

    setLoading(true);
    setVideoUrl(null);
    setStatus('Initializing session...');

    try {
      await checkAndOpenKey();
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
      const ai = new GoogleGenAI({ apiKey });
      const base64Data = image.split(',')[1];

      setStatus('Submitting video generation task...');
      // This is using the experimental generateVideos method
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate the architectural elements with professional motion graphics',
        image: {
          imageBytes: base64Data,
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      setStatus('Processing visual frames (estimated 1-2 mins)...');
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await (ai as any).operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = (operation as any).response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setStatus('Fetching final render...');
        const response = await fetch(`${downloadLink}&key=${apiKey}`);
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio.openSelectKey();
      }
      alert("Video generation encountered an error. Please ensure you have a valid paid project selected.");
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-4">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Dynamic Storyteller (Veo)</h3>
        <p className="text-slate-400 text-sm">Transform static system maps into dynamic motion graphics. Use Veo to visualize data flows and infrastructure growth.</p>

        <div className="flex space-x-4">
          <button onClick={() => setAspectRatio('16:9')} className={`flex-1 py-2 text-xs font-mono border rounded-lg transition-all ${aspectRatio === '16:9' ? 'border-azure-500 bg-azure-500/10 text-azure-400' : 'border-white/10 text-slate-500'}`}>LANDSCAPE (16:9)</button>
          <button onClick={() => setAspectRatio('9:16')} className={`flex-1 py-2 text-xs font-mono border rounded-lg transition-all ${aspectRatio === '9:16' ? 'border-azure-500 bg-azure-500/10 text-azure-400' : 'border-white/10 text-slate-500'}`}>PORTRAIT (9:16)</button>
        </div>

        <div className="relative group">
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="video-image-upload" />
          <label htmlFor="video-image-upload" className={`block w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${image ? 'border-azure-500/50 bg-azure-500/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}>
            {image ? (
              <img src={image} alt="Source" className="w-full h-full object-contain p-2 rounded-2xl" />
            ) : (
              <div className="text-center">
                <span className="text-3xl block mb-2">🎬</span>
                <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Base Image for Motion</span>
              </div>
            )}
          </label>
        </div>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Motion prompt (optional)..."
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-azure-500/50"
        />

        <button
          onClick={generateVideo}
          disabled={loading || !image}
          className="w-full bg-azure-600 hover:bg-azure-500 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-azure-900/40"
        >
          {loading ? 'RENDERING MOTION...' : 'ANIMATE INFRASTRUCTURE'}
        </button>

        <div className="text-[10px] text-slate-500 italic text-center p-2 bg-azure-500/5 border border-azure-500/10 rounded">
          Requires a paid API key for Veo 3.1 access. <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">Billing Docs</a>
        </div>
      </div>

      <div className="glass rounded-2xl border-white/10 flex flex-col items-center justify-center p-4 min-h-[400px]">
        {videoUrl ? (
          <video src={videoUrl} controls className="max-w-full rounded-lg shadow-2xl" />
        ) : (
          <div className="text-center space-y-4">
            {loading ? (
              <>
                <div className="w-12 h-12 border-4 border-azure-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-azure-400 font-mono text-xs uppercase animate-pulse">{status}</p>
                <p className="text-slate-500 text-[10px] max-w-xs mx-auto">VEO processing is intensive. Please do not close this session. The architectural motion is being calculated.</p>
              </>
            ) : (
              <span className="text-slate-600 font-mono text-sm uppercase tracking-tighter">Render Queue Empty</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
