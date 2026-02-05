import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { 
  Smile, 
  Meh, 
  Frown, 
  Sun, 
  Heart, 
  BookOpen, 
  ShieldAlert,
  Sparkles,
  PenLine,
  Cloud,
  Leaf
} from "lucide-react";

export default function Mood() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  // Icons are now rendered with strokeWidth={2.5} for extra boldness
  const moods = [
    { label: "Sad", icon: <Frown strokeWidth={2.5} />, color: "text-blue-600", bg: "bg-blue-100/50", aura: "shadow-blue-300/40" },
    { label: "Neutral", icon: <Meh strokeWidth={2.5} />, color: "text-slate-700", bg: "bg-slate-100/60", aura: "shadow-slate-300/40" },
    { label: "Happy", icon: <Smile strokeWidth={2.5} />, color: "text-emerald-700", bg: "bg-emerald-100/50", aura: "shadow-emerald-300/40" },
    { label: "Amazing", icon: <Sun strokeWidth={2.5} />, color: "text-orange-600", bg: "bg-orange-100/60", aura: "shadow-orange-300/40" },
  ];

  const handleSubmit = () => {
    toast.success("Moment recorded. Breathe easy 🌱", {
      style: { borderRadius: '20px', background: '#064e3b', color: '#ffffff', fontWeight: 'bold' }
    });
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#FDFCFB] relative overflow-hidden selection:bg-emerald-200">
      
      {/* 🌿 Ambient Background - Slightly darkened for better contrast */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-900 text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-lg">
            <Cloud className="w-4 h-4" />
            A Moment for You
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black italic text-slate-900 tracking-tight leading-tight">
            How does your <br />
            <span className="text-emerald-800 underline decoration-emerald-200">inner landscape</span> look?
          </h2>
        </div>

        {/* ☁️ Bold Aura Mood Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`group relative flex flex-col items-center p-10 rounded-[3rem] transition-all duration-500 border-2 ${
                selectedMood === mood.label
                  ? `${mood.bg} ${mood.aura} border-emerald-500 shadow-2xl -translate-y-3`
                  : "bg-white border-slate-200 hover:border-emerald-300 shadow-sm"
              }`}
            >
              <div className={`text-6xl mb-6 transition-all duration-500 ${
                selectedMood === mood.label ? mood.color : "text-slate-400"
              } group-hover:scale-110`}>
                {mood.icon}
              </div>
              <span className={`font-black text-xl tracking-tight ${
                selectedMood === mood.label ? "text-slate-900" : "text-slate-500"
              }`}>
                {mood.label}
              </span>
              
              {selectedMood === mood.label && (
                <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-[3rem] animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Content Reveal */}
        <div className="transition-all duration-700">
          {selectedMood ? (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Guidance Box with High Contrast Text */}
              <div className="bg-white rounded-[3rem] border-2 border-slate-100 p-10 shadow-2xl shadow-emerald-900/10">
                 <MoodResponse label={selectedMood} navigate={navigate} />
              </div>

              {/* Note Taking - Thicker Border & Darker Text */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 px-6 font-black uppercase text-xs tracking-widest">
                  <PenLine className="w-5 h-5 text-emerald-600" />
                  Your Thoughts (Boldly Honest)
                </div>
                <textarea
                  className="w-full bg-white border-2 border-slate-200 rounded-[2.5rem] p-8 text-slate-900 font-bold focus:ring-4 focus:ring-emerald-100 focus:border-emerald-600 focus:outline-none transition-all min-h-[180px] shadow-sm text-xl placeholder:text-slate-300"
                  placeholder="What's on your mind today?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              {/* Submit Button - Solid Black for maximum visibility */}
              <button
                onClick={handleSubmit}
                className="w-full bg-slate-900 text-white py-7 rounded-3xl text-2xl font-black shadow-2xl shadow-slate-400 hover:bg-emerald-800 transition-all duration-300 active:scale-95"
              >
                Save My Reflection
              </button>
            </div>
          ) : (
            <div className="text-center py-24 border-4 border-dashed border-slate-200 rounded-[4rem] bg-slate-50/50">
              <p className="text-slate-400 font-black text-2xl">Select your vibe above to continue.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MoodResponse({ label, navigate }) {
  const content = {
    Sad: {
      title: "Be gentle with yourself.",
      desc: "It's perfectly okay to not be okay. Today is a day for rest and healing.",
      actions: [
        { label: "Soft Care", icon: <Heart strokeWidth={3} />, path: "/coping", primary: true },
        { label: "Emergency Space", icon: <ShieldAlert strokeWidth={3} />, path: "/support", danger: true },
      ]
    },
    Neutral: {
      title: "The beauty of stillness.",
      desc: "Neutrality is a powerful foundation. What's one small win you can claim today?",
      actions: [
        { label: "Set Goal", icon: <Sparkles strokeWidth={3} />, path: "/goals", primary: true },
        { label: "Daily Log", icon: <BookOpen strokeWidth={3} />, path: "/journal" },
      ]
    },
    Happy: {
      title: "Carry this light.",
      desc: "Your energy is radiant. Let's bottle this feeling up for a rainy day.",
      actions: [
        { label: "Gratitude", icon: <Heart strokeWidth={3} />, path: "/journal", primary: true },
        { label: "Plan Joy", icon: <Sparkles strokeWidth={3} />, path: "/goals" },
      ]
    },
    Amazing: {
      title: "A vibrant peak!",
      desc: "You are thriving! Share this warmth with someone or tackle a big dream.",
      actions: [
        { label: "Dream Big", icon: <Sparkles strokeWidth={3} />, path: "/goals", primary: true },
        { label: "Save Memory", icon: <BookOpen strokeWidth={3} />, path: "/journal" },
      ]
    }
  };

  const current = content[label];

  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left space-y-4">
        <h3 className="text-4xl font-black text-slate-900 tracking-tight">{current.title}</h3>
        <p className="text-slate-700 font-bold leading-relaxed text-xl">{current.desc}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {current.actions.map((btn) => (
          <button
            key={btn.label}
            onClick={() => navigate(btn.path)}
            className={`flex items-center gap-3 px-8 py-5 rounded-2xl font-black text-base transition-all duration-300 shadow-md ${
              btn.primary 
                ? "bg-emerald-700 text-white hover:bg-emerald-900" 
                : btn.danger
                ? "text-white bg-rose-600 hover:bg-rose-800"
                : "bg-slate-100 text-slate-900 border-2 border-slate-200 hover:bg-slate-200"
            }`}
          >
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}