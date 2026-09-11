"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, Loader2, Sparkles, Star, ShieldCheck, MapPin } from "lucide-react";
import { HOSTS } from "@/mockData";

export default function AIMatch() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Understanding your interests...");
  const [showResults, setShowResults] = useState(false);

  const [selections, setSelections] = useState({
    vibes: [] as string[],
    languages: [] as string[],
    time: "",
    budget: ""
  });

  const toggleSelection = (category: keyof typeof selections, value: string) => {
    if (category === 'time' || category === 'budget') {
      setSelections({ ...selections, [category]: value });
    } else {
      const arr = selections[category] as string[];
      if (arr.includes(value)) {
        setSelections({ ...selections, [category]: arr.filter(i => i !== value) });
      } else {
        setSelections({ ...selections, [category]: [...arr, value] });
      }
    }
  };

  const handleMatch = () => {
    setStep(5);
    setIsLoading(true);
    
    setTimeout(() => setLoadingText("Finding compatible hosts..."), 1500);
    setTimeout(() => setLoadingText("Checking availability..."), 3000);
    setTimeout(() => setLoadingText("Creating your experience..."), 4500);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 6000);
  };

  if (showResults) {
    const matches = [
      { host: HOSTS[0], match: 92, exp: "Photography & Street Food" },
      { host: HOSTS[1], match: 87, exp: "Hidden History Walk" },
      { host: HOSTS[2], match: 81, exp: "Art & Culture Tour" },
    ];

    return (
      <div className="p-8 max-w-4xl mx-auto pb-24 md:pb-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Sparkles size={32} />
          </div>
          <h1 className="text-3xl font-bold text-[#1f3a2c] mb-2">Your LocalRoots Matches</h1>
          <p className="text-gray-600">We found the perfect verified students for your vibe.</p>
        </div>

        <div className="space-y-6">
          {matches.map((m, idx) => (
            <div key={m.host.id} className={`bg-white rounded-2xl border p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm ${idx === 0 ? 'border-[#c25e3a] ring-1 ring-[#c25e3a]' : 'border-gray-200'}`}>
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={m.host.avatar} alt={m.host.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${idx === 0 ? 'bg-[#c25e3a]' : 'bg-[#1f3a2c]'}`}>
                    {m.match}%
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
                  {m.host.name}
                  {m.host.verified && <ShieldCheck size={20} className="text-green-500 ml-2" />}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{m.host.university}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                  {m.host.interests.slice(0, 3).map(i => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{i}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{m.host.languages.join(' • ')}</p>
              </div>

              <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <div className="flex items-center justify-center md:justify-end text-yellow-500 font-bold mb-1">
                  <Star size={16} className="fill-current mr-1"/> {m.host.rating}
                </div>
                <p className="text-xs text-gray-500 mb-4">{m.host.experiencesCount} experiences</p>
                <Link href={`/traveler/host/${m.host.id}`} className="inline-block bg-[#1f3a2c] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#2d523f] transition whitespace-nowrap">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 relative mb-8">
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#1f3a2c] rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[#c25e3a]">
            <Sparkles size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{loadingText}</h2>
        <p className="text-gray-500">Our AI is analyzing your preferences...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto pb-24 md:pb-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#1f3a2c] mb-2">Find Your Local Match</h1>
        <p className="text-gray-600">Tell us what you love. We'll find someone who gets it.</p>
      </header>

      {/* Progress */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s ? 'bg-[#1f3a2c] text-white' : 'bg-gray-200 text-gray-500'}`}>
                {step > s ? <Check size={16} /> : s}
              </div>
              {s < 4 && <div className={`w-12 h-1 ${step > s ? 'bg-[#1f3a2c]' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6">Step 1: What's your vibe?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Foodie", "History Buff", "Photographer", "Art Lover", "Night Owl", "Architecture", "Shopping", "Music"].map(vibe => {
                const isSelected = selections.vibes.includes(vibe);
                return (
                  <button 
                    key={vibe}
                    onClick={() => toggleSelection('vibes', vibe)}
                    className={`p-4 rounded-xl border-2 text-center transition ${isSelected ? 'border-[#c25e3a] bg-orange-50 text-[#c25e3a]' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-medium">{vibe}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6">Step 2: Preferred Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["English", "Hindi", "Bengali", "Tamil", "Marathi"].map(lang => {
                const isSelected = selections.languages.includes(lang);
                return (
                  <button 
                    key={lang}
                    onClick={() => toggleSelection('languages', lang)}
                    className={`p-4 rounded-xl border-2 text-center transition ${isSelected ? 'border-[#c25e3a] bg-orange-50 text-[#c25e3a]' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-medium">{lang}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6">Step 3: How much time do you have?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {["1–2 hours", "2–4 hours", "Half Day"].map(time => {
                const isSelected = selections.time === time;
                return (
                  <button 
                    key={time}
                    onClick={() => toggleSelection('time', time)}
                    className={`p-6 rounded-xl border-2 text-center transition ${isSelected ? 'border-[#c25e3a] bg-orange-50 text-[#c25e3a]' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-medium block text-lg">{time}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6">Step 4: Your budget per person</h2>
            <div className="grid grid-cols-2 gap-4">
              {["₹500", "₹1000", "₹1500", "₹2000+"].map(budget => {
                const isSelected = selections.budget === budget;
                return (
                  <button 
                    key={budget}
                    onClick={() => toggleSelection('budget', budget)}
                    className={`p-6 rounded-xl border-2 text-center transition ${isSelected ? 'border-[#c25e3a] bg-orange-50 text-[#c25e3a]' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-medium block text-xl">{budget}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="px-6 py-3 font-medium text-gray-500 hover:text-gray-900">
              Back
            </button>
          ) : <div></div>}
          
          {step < 4 ? (
            <button onClick={() => setStep(step + 1)} className="bg-[#1f3a2c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2d523f] transition">
              Next Step
            </button>
          ) : (
            <button onClick={handleMatch} className="bg-[#c25e3a] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a64e2f] transition flex items-center shadow-md">
              <Sparkles size={18} className="mr-2" /> Find My Local Match
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
