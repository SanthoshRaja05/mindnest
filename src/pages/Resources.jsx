import { BookOpen, AlertCircle, Pill, HeartPulse, Info, ArrowRight } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "What is Depression?",
      description:
        "An in-depth look at the neurobiology and psychological foundations of depression.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Common Symptoms",
      description:
        "Identify the physical and emotional markers, from sleep disturbances to cognitive fatigue.",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Treatment Options",
      description:
        "A guide to evidence-based approaches including CBT, medication, and holistic care.",
      icon: <Pill className="w-6 h-6" />,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Self-Help & Coping",
      description:
        "Actionable, daily strategies designed to help manage symptoms and build resilience.",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "text-rose-600 bg-rose-50",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#F9FAFB] selection:bg-indigo-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Knowledge Base</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Educational <span className="text-indigo-600 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Resources</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Explore evidence-based insights to help you navigate your mental health journey with clarity and confidence.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((r) => (
            <div
              key={r.title}
              className="group bg-white border border-slate-100 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1 flex flex-col items-start cursor-pointer"
            >
              <div className={`p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${r.color}`}>
                {r.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {r.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium italic">
                {r.description}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-sm font-black text-indigo-600 uppercase tracking-widest">
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Card */}
        <div className="mt-16 bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="bg-amber-100 text-amber-600 p-4 rounded-2xl">
              <Info className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Medical Disclaimer</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                The information provided here is for educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
              </p>
            </div>
          </div>
        </div>

        

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            Need immediate help? Visit our <span className="text-indigo-600 cursor-pointer hover:underline">Support Page</span>
          </p>
        </div>
      </div>
    </div>
  );
}