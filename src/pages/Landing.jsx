import { Link } from "react-router-dom";
import {
  Heart,
  LineChart,
  BookOpen,
  ShieldCheck,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Leaf,
  Wind
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col selection:bg-emerald-100 font-sans antialiased text-slate-800">
      
      {/* 🌿 Relaxing Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-emerald-100/40 blur-[120px] rounded-full animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-orange-50/50 blur-[100px] rounded-full"></div>
      </div>

      <div className="pt-24"></div>

      {/* Hero Section */}
      <section className="relative px-6">
        <div className="max-w-7xl mx-auto py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="md:w-3/5 text-center md:text-left space-y-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50/50 backdrop-blur-sm border border-emerald-100/50 px-5 py-2 rounded-full shadow-sm">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 text-[10px] font-black uppercase tracking-[0.2em]">
                Your Space to Breathe
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1] tracking-tight">
              A gentle space for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                your mental clarity.
              </span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              MindNest isn't another tracker—it's a digital sanctuary. 
              Quiet the noise, document your journey, and find support in a 
              calm, private, and secure environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <Link
                to="/dashboard"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all duration-500 shadow-xl shadow-emerald-200/50 hover:-translate-y-1"
              >
                Enter Sanctuary
                <Wind className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-70" />
              </Link>

              <Link
                to="/resources"
                className="w-full sm:w-auto text-center text-slate-500 px-8 py-4 rounded-full text-lg font-medium hover:text-emerald-600 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>

          {/* Right Visual: Soft & Organic */}
          <div className="md:w-2/5 relative">
            <div className="relative z-10 p-3 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] shadow-2xl overflow-hidden shadow-emerald-900/5">
              <img
                src="/relax.jpg"
                alt="Calm water and nature"
                className="rounded-[2.5rem] w-full aspect-[4/5] object-cover opacity-90 sepia-[10%] group-hover:sepia-0 transition-all duration-1000"
              />
              
              {/* Floating Dashboard Card - Glassmorphism */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-xl shadow-black/5">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-emerald-800/50 tracking-widest">Today's Vibe</p>
                    <p className="text-xl font-serif italic text-slate-800">Perfectly Peaceful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features: Soft Cards */}
      <section className="py-24 px-6 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900">
              Guided by nature, backed by science.
            </h2>
            <div className="h-1 w-12 bg-emerald-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Wind />}
              title="Mindful Tracking"
              desc="Simple, non-intrusive ways to log your mood without the pressure of metrics."
              bgColor="bg-emerald-50"
              iconColor="text-emerald-600"
            />
            <FeatureCard
              icon={<BookOpen />}
              title="Private Reflections"
              desc="A quiet corner for your thoughts, protected by industry-leading encryption."
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Safe Circles"
              desc="Connect with a community that prioritizes kindness and genuine support."
              bgColor="bg-orange-50"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <div className="text-3xl font-serif italic text-emerald-600">MindNest.</div>
            <p className="max-w-sm text-slate-400 font-light text-base leading-relaxed">
              We believe technology should lower your heart rate, not increase it.
            </p>
          </div>
          
          <div className="flex gap-10">
            <SocialLink icon={<Instagram />} />
            <SocialLink icon={<Twitter />} />
            <SocialLink icon={<Github />} />
          </div>
          
          <div className="text-slate-300 text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 MindNest Lab • A Breath of Fresh Air
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, bgColor, iconColor }) {
  return (
    <div className="group p-12 rounded-[3rem] bg-white border border-transparent hover:border-emerald-100 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-900/5">
      <div className={`${bgColor} ${iconColor} w-14 h-14 rounded-[1.5rem] flex items-center justify-center mb-10 transition-transform duration-700 group-hover:-rotate-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-serif italic text-slate-900 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}

function SocialLink({ icon }) {
  return (
    <a href="#" className="text-slate-300 hover:text-emerald-500 transition-all duration-500 transform hover:scale-110">
      <div className="w-5 h-5">{icon}</div>
    </a>
  );
}