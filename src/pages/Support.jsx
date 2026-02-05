import { Phone, MessageCircle, Heart, ShieldAlert, LifeBuoy, ExternalLink, XCircle } from "lucide-react";

export default function Support() {
  
  // Professional Safety Feature: Quick Exit (common on support sites)
  const quickExit = () => {
    window.location.href = "https://www.google.com";
  };

  const helplineData = [
    { country: "India", number: "+91 ***** *****", provider: "iCall (TISS)" },
    { country: "USA", number: "***", provider: "Suicide & Crisis Lifeline" },
    { country: "UK", number: "***", provider: "NHS Mental Health Service" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFDFF] pt-28 pb-20 px-6 selection:bg-red-100">
      
      {/* Quick Exit Button - Fixed for accessibility */}


      <div className="max-w-4xl mx-auto">
        
        {/* Urgent Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full shadow-sm">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Urgent Assistance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            You are <span className="text-red-600">Not Alone.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Reach out to these secure, confidential resources. Someone is ready to listen, right now.
          </p>
        </div>

        {/* Emergency Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {helplineData.map((item) => (
            <div key={item.country} className="bg-white border-2 border-red-50 p-6 rounded-[2rem] shadow-xl shadow-red-50/50 flex flex-col items-center text-center hover:border-red-200 transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.country}</span>
              <h3 className="font-bold text-slate-800 mb-4">{item.provider}</h3>
              <a 
                href={`tel:${item.number}`}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl font-mono font-black text-xl tracking-tighter transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} /> {item.number}
              </a>
            </div>
          ))}
        </div>

        

        {/* Professional Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Therapeutic Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 font-medium italic text-sm">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Connect with licensed therapists for scheduled sessions.
              </li>
              <li className="flex items-start gap-3 text-slate-500 font-medium italic text-sm">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Find local community mental health centers.
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <LifeBuoy size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Peer Assistance</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 font-medium italic text-sm">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Online support groups moderated by trained peers.
              </li>
              <li className="flex items-start gap-3 text-slate-500 font-medium italic text-sm">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Confidential "warm-lines" for non-crisis listening.
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center py-10 border-t border-slate-100">
          <blockquote className="text-xl font-serif italic text-slate-400 mb-4">
            "Asking for help is the first act of your future self."
          </blockquote>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">MindNest Safety Protocol</p>
        </div>

      </div>
    </div>
  );
}