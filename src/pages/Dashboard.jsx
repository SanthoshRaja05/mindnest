import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Target, 
  Wind, 
  Calendar, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Activity,
  Zap,
  Leaf,
  Sun
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCFB] relative overflow-hidden pt-28 pb-12 px-6 md:px-12 selection:bg-emerald-100">
      
      {/* 🌿 Atmospheric Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 blur-[120px] rounded-full animate-pulse duration-[8s]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-orange-100/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Soft Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/50 border border-emerald-100/50 px-4 py-1.5 rounded-full text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
              <Leaf className="w-3 h-3" />
              Mindful Sanctuary
            </div>
            <h1 className="text-4xl md:text-5xl font-serif italic text-slate-800 tracking-tight">
              Welcome back, <span className="text-emerald-600/80">Friend.</span>
            </h1>
            <p className="text-slate-400 font-light text-lg">Take a breath. Here is your space for today.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center space-x-3 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/60 shadow-sm">
               <Calendar className="w-4 h-4 text-emerald-400" />
               <span className="text-sm font-medium text-slate-600 italic">
                 {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
               </span>
            </div>
            <button
              onClick={() => navigate("/mood")}
              className="flex items-center gap-3 bg-emerald-600/90 text-white px-8 py-3.5 rounded-full font-bold shadow-xl shadow-emerald-200/40 hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-500"
            >
              <Zap className="w-4 h-4 fill-current opacity-80" />
              Begin Check-in
            </button>
          </div>
        </header>

        {/* 📊 Soft Insight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard label="Internal Vibe" value="Balanced" trend="+12%" icon={<Activity className="text-emerald-500" />} />
          <StatCard label="Journal Path" value="5 Days" trend="Steady" icon={<TrendingUp className="text-orange-400" />} />
          <StatCard label="Small Wins" value="12/15" trend="+2" icon={<Target className="text-indigo-400" />} />
          <StatCard label="Stillness" value="42m" trend="+5m" icon={<Wind className="text-blue-400" />} />
        </div>

        {/* Action Sanctuary */}
        <div className="grid gap-8 md:grid-cols-3">
          <ActionCard
            icon={<LayoutDashboard />}
            title="Reflection Gallery"
            description="Observe the landscape of your emotions over time."
            color="text-blue-600"
            bgColor="bg-blue-50/50"
            onClick={() => navigate("/mood")}
          />
          <ActionCard
            icon={<Target />}
            title="Gentle Intentions"
            description="Plant small seeds for your growth today."
            color="text-indigo-600"
            bgColor="bg-indigo-50/50"
            onClick={() => navigate("/goals")}
          />
          <ActionCard
            icon={<Wind />}
            title="Breath Toolkit"
            description="Find instant calm with guided grounding exercises."
            color="text-emerald-600"
            bgColor="bg-emerald-50/50"
            onClick={() => navigate("/resources")}
          />
        </div>

        {/* 🕯️ The Daily Meditation Card */}
        <div className="relative group overflow-hidden bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 p-10 md:p-16 shadow-2xl shadow-emerald-900/5">
            <div className="absolute -top-10 -right-10 opacity-5 transition-transform duration-1000 group-hover:scale-110">
               <Sun className="w-64 h-64 text-orange-500" />
            </div>
            
            <div className="relative z-10 max-w-xl">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-8">
                   <div className="h-px w-8 bg-emerald-200" />
                   Wisdom for the moment
                </span>
                <blockquote className="text-3xl md:text-4xl font-serif italic text-slate-800 leading-[1.2] mb-10">
                  "Progress is not a straight line; it's a series of small, compassionate adjustments."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 font-serif italic text-xl shadow-inner">
                    m
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">MindNest Curator</p>
                    <p className="text-slate-400 text-xs font-light tracking-wide italic">Your mental health companion</p>
                  </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ label, value, trend, icon }) {
  return (
    <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-700 group">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-widest opacity-80">
          {trend}
        </span>
      </div>
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-2xl font-serif italic text-slate-800">{value}</p>
    </div>
  );
}

function ActionCard({ icon, title, description, color, bgColor, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="group text-left p-10 rounded-[3rem] bg-white/40 backdrop-blur-md border border-white hover:border-emerald-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-1000 flex flex-col h-full"
    >
      <div className={`w-14 h-14 rounded-2xl ${bgColor} ${color} flex items-center justify-center mb-8 transition-all duration-700 group-hover:-rotate-6 shadow-inner`}>
        {icon}
      </div>
      <h3 className="text-2xl font-serif italic text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500/80 font-light leading-relaxed mb-8 flex-1">
        {description}
      </p>
      <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 opacity-40 group-hover:opacity-100 transition-all">
        Explore <ChevronRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}