import Link from "next/link";
import { Search, Star, ShieldCheck, MapPin, Clock } from "lucide-react";
import { EXPERIENCES, HOSTS } from "@/mockData";

export default function TravelerDashboard() {
  const chips = ["Food", "Photography", "History", "Art", "Nightlife", "Shopping", "Architecture", "Music"];
  
  return (
    <div className="p-8 max-w-6xl mx-auto pb-24 md:pb-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[#1f3a2c] mb-2">Good evening, Rahul 👋</h1>
        <p className="text-gray-600 text-lg">Where do you want to explore today?</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <input 
          type="text" 
          className="block w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-gray-200 shadow-sm focus:ring-2 focus:ring-[#1f3a2c] bg-white text-lg placeholder-gray-400" 
          placeholder="Search a city or neighborhood (e.g. Kolkata)" 
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <Link href="/traveler/match" className="bg-[#1f3a2c] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#2d523f] transition">
            AI Match
          </Link>
        </div>
      </div>

      {/* Interest Chips */}
      <div className="flex overflow-x-auto space-x-3 pb-4 mb-10 hide-scrollbar">
        {chips.map(chip => (
          <button key={chip} className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 font-medium hover:border-[#1f3a2c] hover:bg-green-50 whitespace-nowrap transition-colors">
            {chip}
          </button>
        ))}
      </div>

      {/* Recommended Section */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.slice(0, 4).map(exp => {
            const host = HOSTS.find(h => h.id === exp.hostId);
            return (
              <div key={exp.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="relative h-48">
                  <img src={exp.image} className="w-full h-full object-cover" alt={exp.title} />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    ₹{exp.price}
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                    <span className="flex items-center"><Clock size={12} className="mr-1"/> {exp.duration}</span>
                    <span>•</span>
                    <span className="flex items-center"><MapPin size={12} className="mr-1"/> {exp.location.split(',')[0]}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-4 mt-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={host?.avatar} className="w-8 h-8 rounded-full object-cover mr-2 border border-gray-200" alt={host?.name} />
                      <div>
                        <p className="text-sm font-medium leading-none">{host?.name}</p>
                        {host?.verified && <p className="text-xs text-green-600 flex items-center mt-1"><ShieldCheck size={10} className="mr-1"/> Verified Student</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm font-bold">
                        <Star size={14} className="text-yellow-500 fill-current mr-1" />
                        {exp.rating}
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/traveler/experience/${exp.id}`} className="mt-4 w-full block text-center bg-gray-50 hover:bg-[#1f3a2c] text-gray-800 hover:text-white py-2.5 rounded-xl font-medium transition-colors border border-gray-200 hover:border-[#1f3a2c]">
                    View Experience
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
