import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { 
  Target, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Trophy, 
  TrendingUp,
  Trash2
} from "lucide-react";

export default function Goals() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(storedGoals);
  }, []);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (!goal.trim()) return;
    const newGoal = {
      id: Date.now(),
      text: goal,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setGoals([...goals, newGoal]);
    setGoal("");
    toast.success("Goal locked in 🌱");
  };

  const toggleGoal = (id) => {
    const updatedGoals = goals.map((g) =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    setGoals(updatedGoals);
    const goal = goals.find(g => g.id === id);
    if (!goal.completed) toast.success("Mission accomplished! 🎉");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
    toast.error("Goal removed");
  };

  const completedCount = goals.filter(g => g.completed).length;
  const progressPercent = goals.length > 0 ? (completedCount / goals.length) * 100 : 0;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header & Stats Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Target className="w-3 h-3" />
              Focus Mode
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Daily <span className="text-indigo-600">Objectives</span>
            </h2>
            <p className="text-slate-500 font-medium">Small wins lead to massive breakthroughs.</p>
          </div>

          {/* Progress Card */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 min-w-[240px]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progress</span>
              <span className="text-sm font-black text-indigo-600">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Goal Input Section */}
        <div className="bg-white p-2 rounded-[2rem] shadow-xl shadow-indigo-100/20 border border-slate-100 flex items-center">
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addGoal()}
            placeholder="What's your next priority?"
            className="flex-1 bg-transparent px-6 py-4 text-slate-700 focus:outline-none placeholder:text-slate-300 font-medium"
          />
          <button
            onClick={addGoal}
            disabled={!goal.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white p-4 rounded-[1.5rem] transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 font-bold"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden md:inline pr-2 text-sm">Add Objective</span>
          </button>
        </div>

        {/* Goals List */}
        <div className="grid gap-4">
          {goals.length > 0 ? (
            goals.map((g) => (
              <div
                key={g.id}
                className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                  g.completed 
                    ? "bg-emerald-50/40 border-emerald-100" 
                    : "bg-white border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button 
                    onClick={() => toggleGoal(g.id)}
                    className={`transition-colors ${g.completed ? "text-emerald-500" : "text-slate-300 hover:text-indigo-500"}`}
                  >
                    {g.completed ? <CheckCircle2 className="w-7 h-7" /> : <Circle className="w-7 h-7" />}
                  </button>
                  <span className={`text-lg font-semibold transition-all duration-500 ${
                    g.completed ? "text-slate-400 line-through opacity-60" : "text-slate-700"
                  }`}>
                    {g.text}
                  </span>
                </div>
                
                <button 
                  onClick={() => deleteGoal(g.id)}
                  className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Clear your mind.</h3>
              <p className="text-slate-400">Define your first goal to start the momentum.</p>
            </div>
          )}
        </div>

        {/* Motivational Footer */}
        {goals.length > 0 && completedCount === goals.length && (
          <div className="bg-indigo-600 rounded-3xl p-8 text-white flex items-center gap-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Trophy className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight">Full Sweep!</h4>
              <p className="opacity-90 font-medium">You've conquered all your objectives for today. Take time to rest.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}