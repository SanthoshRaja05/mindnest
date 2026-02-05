import { useState } from "react";
import { 
  Wind, 
  Leaf, 
  PenTool, 
  Move, 
  Eye, 
  Waves, 
  Clipboard, 
  Snowflake, 
  UserCircle, 
  Music, 
  Sun, 
  Heart,
  X,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Coping() {
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const strategies = [
    {
      title: "Deep Breathing",
      description: "Take 5 slow deep breaths. Inhale for 4 seconds, feel your belly expand, and exhale slowly for 6 seconds to signal safety to your brain.",
      icon: <Wind />,
      category: "Physical",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Mindfulness",
      description: "Observe your thoughts like clouds passing in the sky. Don't try to change them; just acknowledge their presence and let them drift.",
      icon: <Leaf />,
      category: "Mental",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "5-4-3-2-1 Grounding",
      description: "Acknowledge 5 things you see, 4 you can touch, 3 you hear, 2 you can smell, and 1 you can taste. This pulls you out of anxiety and into the now.",
      icon: <Eye />,
      category: "Quick Reset",
      color: "bg-violet-50 text-violet-600"
    },
    {
      title: "Box Breathing",
      description: "Visualize a square. Inhale (4s), Hold (4s), Exhale (4s), Hold (4s). Repeat 4 times to stabilize your heart rate.",
      icon: <Waves />,
      category: "Physical",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Cold Water Reset",
      description: "Splashing cold water on your face triggers the 'Mammalian Dive Reflex', which naturally lowers your heart rate and resets the nervous system.",
      icon: <Snowflake />,
      category: "Quick Reset",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Self Compassion",
      description: "Place a hand on your heart. Remind yourself: 'This is a moment of suffering. Suffering is part of life. May I be kind to myself.'",
      icon: <Heart />,
      category: "Mental",
      color: "bg-rose-50 text-rose-600"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pt-24 pb-20 px-6 selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Your Resilience Toolkit
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Coping <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Strategies</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Evidence-based techniques to help you navigate overwhelming moments and return to center.
          </p>
        </div>

        {/* Strategy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((s) => (
            <div
              key={s.title}
              onClick={() => setSelectedStrategy(s)}
              className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] cursor-pointer 
                         transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
                         hover:-translate-y-2 flex flex-col items-start h-full"
            >
              {/* Category Tag */}
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${s.color}`}>
                {s.category}
              </span>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${s.color}`}>
                {s.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed line-clamp-2 mb-8">
                {s.description}
              </p>

              <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-indigo-600 group-hover:gap-2 transition-all">
                Practice Exercise <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL POPUP */}
        {selectedStrategy && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in"
              onClick={() => setSelectedStrategy(null)}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 max-w-2xl w-full overflow-hidden animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedStrategy(null)}
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${selectedStrategy.color}`}>
                <div className="scale-[1.8]">{selectedStrategy.icon}</div>
              </div>

              <span className={`text-xs font-black uppercase tracking-[0.2em] mb-4 block ${selectedStrategy.color.split(' ')[1]}`}>
                {selectedStrategy.category} Guide
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {selectedStrategy.title}
              </h3>

              <div className="prose prose-slate mb-10">
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-indigo-100 pl-6">
                  {selectedStrategy.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setSelectedStrategy(null)}
                  className="flex-1 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
                >
                  I'm feeling better
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}