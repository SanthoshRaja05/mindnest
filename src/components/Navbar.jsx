import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, HeartPulse } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Goals", path: "/goals" },
    { name: "Journal", path: "/journal" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-1000 px-6 ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto transition-all duration-700 ease-in-out rounded-full border ${
          scrolled 
            ? "bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-white/50 px-8 py-3" 
            : "bg-transparent border-transparent px-4 py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Relaxing Brand Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center">
              {/* Soft glow effect behind logo */}
              <div className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 opacity-50" />
              <Leaf className="relative w-6 h-6 text-indigo-500 transition-transform duration-1000 group-hover:rotate-[20deg]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Mind<span className="text-indigo-400 font-light italic">Nest</span>
            </span>
          </Link>

          {/* Floating Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-indigo-400"
                }`}
              >
                {/* Active Indicator: Soft background bubble */}
                {location.pathname === link.path && (
                  <div className="absolute inset-0 bg-indigo-50/60 rounded-full -z-10 animate-in fade-in zoom-in duration-700" />
                )}
                {link.name}
              </Link>
            ))}
            
            <div className="h-4 w-[1px] bg-slate-200 mx-3 opacity-40" />

            {/* Support Button: Reassurance-focused color */}
            <Link
              to="/support"
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500/90 text-white text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-rose-200/50 hover:bg-rose-600 hover:shadow-rose-300/60 transition-all duration-500 active:scale-95"
            >
              <HeartPulse className="w-4 h-4 animate-pulse group-hover:scale-110 transition-transform" />
              Support
            </Link>
          </div>

          {/* Mobile Toggle with custom soft style */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-slate-500 bg-slate-50 rounded-full hover:bg-indigo-50 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: "Soft Waterfall" Animation */}
      <div
        className={`md:hidden absolute top-[calc(100%+1.5rem)] left-6 right-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl text-lg font-semibold transition-all ${
                location.pathname === link.path
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/support"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 px-6 py-5 rounded-[1.8rem] bg-rose-500 text-white font-bold shadow-xl shadow-rose-100 transition-all active:scale-95"
            >
              <HeartPulse size={20} />
              Seek Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}