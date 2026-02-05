import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  PenLine,
  History,
  Sparkles,
  Save,
  ChevronRight,
  Clock,
  Trash2,
  PlusCircle,
  FileText
} from "lucide-react";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [history, setHistory] = useState([]);
  const [prompt, setPrompt] = useState("How are you really feeling today?");
  const [selectedId, setSelectedId] = useState(null);

  const prompts = [
    "What is one thing you're grateful for today?",
    "Describe a moment today that made you smile.",
    "What's one thing you want to let go of?",
    "If you could talk to your future self, what would you say?",
    "What does peace look like to you right now?"
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setHistory(saved.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("journalEntries", JSON.stringify(data));
    setHistory(data);
  };

  const handleSave = () => {
    if (!entry.trim()) return;

    if (selectedId) {
      const updated = history.map(item =>
        item.id === selectedId ? { ...item, text: entry } : item
      );
      saveToStorage(updated);
      toast.success("Reflection updated ✨");
    } else {
      const newEntry = {
        id: Date.now(),
        text: entry,
        date: new Date().toISOString(),
      };
      saveToStorage([newEntry, ...history]);
      toast.success("Captured in your nest 🌱");
    }

    resetEditor();
  };

  const resetEditor = () => {
    setEntry("");
    setSelectedId(null);
  };

  const handleDelete = (id) => {
    const filtered = history.filter(item => item.id !== id);
    saveToStorage(filtered);
    if (selectedId === id) resetEditor();
    toast.success("Entry removed");
  };

  const openEntry = (item) => {
    setEntry(item.text);
    setSelectedId(item.id);
  };

  const getRandomPrompt = () => {
    const filtered = prompts.filter(p => p !== prompt);
    setPrompt(filtered[Math.floor(Math.random() * filtered.length)]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-12 px-6 font-sans selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR: HISTORY */}
        <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6 sticky top-28">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <History className="w-4 h-4" />
              Journal History
            </h3>
            <button 
              onClick={resetEditor}
              className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="New Entry"
            >
              <PlusCircle size={20} />
            </button>
          </div>

          <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
            {history.length > 0 ? (
              history.map((item) => (
                <div
                  key={item.id}
                  className={`group relative p-5 rounded-[2rem] border transition-all duration-300 ${
                    selectedId === item.id 
                    ? "bg-white border-indigo-200 shadow-xl shadow-indigo-100/50 scale-[1.02]" 
                    : "bg-white/50 border-slate-100 hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <div onClick={() => openEntry(item)} className="cursor-pointer space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Clock size={12} />
                        {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      {selectedId === item.id && <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />}
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="absolute -top-2 -right-2 bg-white border border-slate-100 p-1.5 rounded-full text-slate-300 hover:text-red-500 hover:border-red-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem]">
                <FileText className="mx-auto text-slate-300 mb-3" size={32} />
                <p className="text-slate-400 text-sm font-bold uppercase tracking-tighter">Your nest is empty</p>
              </div>
            )}
          </div>
        </aside>

        {/* MAIN EDITOR */}
        <main className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Header Toolbar */}
            <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${selectedId ? 'bg-amber-100 text-amber-600' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'}`}>
                  <PenLine size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                    {selectedId ? "Edit Reflection" : "New Reflection"}
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {selectedId ? "Updating past thoughts" : "Capturing the moment"}
                  </p>
                </div>
              </div>

              <button 
                onClick={getRandomPrompt}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-100"
                title="Get new prompt"
              >
                <Sparkles size={20} />
              </button>
            </div>

            {/* Writing Surface */}
            <div className="p-8 md:p-12 space-y-8">
              {!selectedId && (
                <div className="animate-in fade-in slide-in-from-left-4">
                  <h3 className="text-xl md:text-2xl font-serif text-slate-400 leading-relaxed italic border-l-4 border-indigo-50 pl-6">
                    "{prompt}"
                  </h3>
                </div>
              )}

              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Start typing..."
                className="w-full h-80 md:h-96 resize-none border-none focus:ring-0 text-lg md:text-xl text-slate-700 leading-relaxed font-serif placeholder:text-slate-200 custom-scrollbar"
              />

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em]">
                    {entry.trim().length > 0 ? `${entry.trim().split(/\s+/).length} Words` : "Empty Canvas"}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedId && (
                    <button 
                      onClick={resetEditor}
                      className="px-6 py-4 rounded-2xl text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                  <button 
                    onClick={handleSave}
                    disabled={!entry.trim()}
                    className={`group flex items-center gap-3 px-10 py-4 rounded-2xl font-bold transition-all duration-300 ${
                      entry.trim() 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-200 hover:bg-indigo-600 hover:-translate-y-1" 
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                    }`}
                  >
                    <Save size={18} />
                    <span>{selectedId ? "Update Reflection" : "Save to Nest"}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-center text-[11px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            MindNest Zero-Knowledge Encryption Active
          </p>
        </main>
      </div>
    </div>
  );
}