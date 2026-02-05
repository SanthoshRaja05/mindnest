export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative">
      
      {/* Dynamic Background Ambiance - Softer Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative flex flex-col items-center">
        
        {/* Logo Container */}
        <div className="relative h-40 w-40 flex items-center justify-center">
          
          {/* Outer Halo - Very slow and faint */}
          <div className="absolute inset-0 border border-indigo-500/10 rounded-full animate-[ping_3s_linear_infinite]"></div>
          <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>

          {/* Abstract Relaxing "Bloom" Shape */}
          <div className="flex items-center gap-3 z-20 h-16">
            {/* Left Petal */}
            <div className="w-1.5 h-8 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full animate-[breath_3s_ease-in-out_infinite_0s] opacity-60"></div>
            
            {/* Center Core (The "Breath") */}
            <div className="w-2 h-16 bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-500 rounded-full animate-[breath_3s_ease-in-out_infinite_0.5s] shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>

            {/* Right Petal */}
            <div className="w-1.5 h-8 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full animate-[breath_3s_ease-in-out_infinite_1s] opacity-60"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-2xl font-extralight tracking-[0.4em] text-zinc-400/80 animate-[softFade_4s_ease-in-out_infinite]">
            MINDNEST
          </h1>
          
          {/* Minimalist "Horizon" Line */}
          <div className="mt-6 w-32 h-[1px] bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent animate-[flow_4s_infinite]"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes breath {
          0%, 100% { 
            transform: scaleY(0.6) translateY(0); 
            filter: blur(1px) brightness(0.8);
          }
          50% { 
            transform: scaleY(1.1) translateY(-5px); 
            filter: blur(0px) brightness(1.2);
          }
        }

        @keyframes flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes softFade {
          0%, 100% { opacity: 0.4; letter-spacing: 0.4em; }
          50% { opacity: 1; letter-spacing: 0.45em; }
        }
      `}</style>
    </div>
  );
}