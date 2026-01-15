
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt.trim() || loading) return;

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/png' } },
            { text: prompt }
          ]
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
        }
      }
    } catch (error) {
      console.error(error);
      alert("Failed to edit image. Ensure the prompt and image are valid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-4">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Infrastructure Visualizer</h3>
        <p className="text-slate-400 text-sm">Upload a system diagram or server photo and request AI-powered enhancements or modifications.</p>
        
        <div className="relative group">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className={`block w-full h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${image ? 'border-azure-500/50 bg-azure-500/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
          >
            {image ? (
              <img src={image} alt="Source" className="w-full h-full object-contain p-2 rounded-2xl" />
            ) : (
              <div className="text-center">
                <span className="text-4xl block mb-2">🖼️</span>
                <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Select Image Asset</span>
              </div>
            )}
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Modification Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. 'Add high-availability indicators' or 'Change to retro blueprint style'"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-azure-500/50 h-24 resize-none"
          />
        </div>

        <button
          onClick={handleEdit}
          disabled={loading || !image || !prompt}
          className="w-full bg-azure-600 hover:bg-azure-500 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-azure-900/40"
        >
          {loading ? 'REPROVISIONING ASSET...' : 'GENERATE MODIFIED VISUAL'}
        </button>
      </div>

      <div className="glass rounded-2xl border-white/10 flex items-center justify-center p-4 min-h-[400px]">
        {result ? (
          <div className="text-center space-y-4">
            <img src={result} alt="Result" className="max-w-full max-h-[450px] rounded-lg shadow-2xl" />
            <a href={result} download="architect-visual.png" className="inline-block text-azure-400 text-xs font-mono border-b border-azure-400/30 hover:text-white hover:border-white transition-all">DOWNLOAD_OUTPUT.PNG</a>
          </div>
        ) : (
          <div className="text-slate-600 text-center font-mono text-sm uppercase tracking-tighter">
            {loading ? 'Generating...' : 'Awaiting visual pipeline execution'}
          </div>
        )}
      </div>
    </div>
  );
};
