"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, MapPin, X, ArrowRight, ShieldCheck } from "lucide-react";
import { MAP_LOCATIONS, EXPERIENCES, HOSTS } from "@/mockData";

export default function ExploreMap() {
  const [selectedLoc, setSelectedLoc] = useState<typeof MAP_LOCATIONS[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'red': return 'bg-red-500 shadow-red-500/50';
      case 'orange': return 'bg-orange-500 shadow-orange-500/50';
      case 'green': return 'bg-green-500 shadow-green-500/50';
      default: return 'bg-gray-500 shadow-gray-500/50';
    }
  };

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-[#e0e7e1]">
      {/* Background Map Image (Mock) */}
      <div className="absolute inset-0 opacity-80" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(50%) sepia(20%)'
      }}></div>
      
      {/* Grid Overlay for Map Feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>

      {/* Header Overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-gray-200 z-10 flex items-center space-x-3">
        <MapPin className="text-[#1f3a2c]" />
        <h1 className="text-2xl font-bold text-[#1f3a2c]">Explore Beyond the Crowds</h1>
      </div>

      {/* Markers */}
      {MAP_LOCATIONS.map(loc => (
        <button 
          key={loc.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
          style={{ top: `${loc.coordinates.y}%`, left: `${loc.coordinates.x}%` }}
          onClick={() => setSelectedLoc(loc)}
        >
          <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-125 ${getStatusColor(loc.status)} animate-pulse-slow`}>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-md shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {loc.name}
          </div>
        </button>
      ))}

      {/* Info Panel */}
      {selectedLoc && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[90%] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-30 animate-in slide-in-from-bottom-8">
          <div className={`h-2 ${selectedLoc.status === 'red' ? 'bg-red-500' : selectedLoc.status === 'green' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedLoc.name}</h3>
                <p className="text-sm font-medium flex items-center mt-1">
                  Crowd Level: 
                  <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${selectedLoc.status === 'red' ? 'bg-red-100 text-red-700' : selectedLoc.status === 'green' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {selectedLoc.crowd}
                  </span>
                </p>
              </div>
              <button onClick={() => setSelectedLoc(null)} className="text-gray-400 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {selectedLoc.status === 'red' && selectedLoc.recommendation && (
              <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1f3a2c]/5 rounded-bl-full -mr-4 -mt-4"></div>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 flex items-center">
                  <ShieldCheck size={14} className="mr-1"/> LocalRoots Suggests
                </p>
                <h4 className="font-bold text-gray-900 mb-1">
                  {EXPERIENCES.find(e => e.id === selectedLoc.recommendation)?.title}
                </h4>
                
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded shadow-sm text-gray-600 flex items-center"><Info size={10} className="mr-1 text-green-500"/> Lower crowd</span>
                  <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded shadow-sm text-gray-600 flex items-center"><Info size={10} className="mr-1 text-blue-500"/> 3 verified hosts</span>
                </div>

                <Link href={`/traveler/experience/${selectedLoc.recommendation}`} className="flex items-center justify-between bg-[#1f3a2c] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2d523f] transition">
                  Explore Alternative <ArrowRight size={16} />
                </Link>
              </div>
            )}
            
            {selectedLoc.status === 'green' && selectedLoc.recommendation && (
              <div className="mt-4">
                <Link href={`/traveler/experience/${selectedLoc.recommendation}`} className="w-full flex items-center justify-center bg-[#c25e3a] text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-[#a64e2f] transition shadow-md">
                  View Local Experience <ArrowRight size={16} className="ml-2"/>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
