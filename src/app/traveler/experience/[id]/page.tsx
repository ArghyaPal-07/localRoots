"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShieldCheck, MapPin, Clock, Users, ArrowLeft, Check, Coffee } from "lucide-react";
import { EXPERIENCES, HOSTS } from "@/mockData";
import { notFound, useRouter } from "next/navigation";

export default function ExperienceDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const experience = EXPERIENCES.find(e => e.id === params.id);
  const [bookingState, setBookingState] = useState<'idle' | 'booking' | 'success'>('idle');
  
  if (!experience) {
    notFound();
  }

  const host = HOSTS.find(h => h.id === experience.hostId)!;

  const handleBook = () => {
    setBookingState('booking');
    setTimeout(() => {
      setBookingState('success');
    }, 2000);
  };

  if (bookingState === 'success') {
    return (
      <div className="max-w-2xl mx-auto p-8 pt-20 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Check size={48} strokeWidth={3} />
        </div>
        <h1 className="text-4xl font-bold text-[#1f3a2c] mb-2">Your Local Experience is Confirmed! 🎉</h1>
        <p className="text-xl text-gray-600 mb-10">Get ready to explore Kolkata like a local.</p>
        
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl text-left mb-8">
          <h3 className="font-bold text-xl mb-6 border-b pb-4">{experience.title}</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Host</span>
              <div className="flex items-center font-bold">
                <img src={host.avatar} className="w-6 h-6 rounded-full mr-2" alt={host.name} />
                {host.name} <ShieldCheck size={16} className="text-green-500 ml-1" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Date</span>
              <span className="font-bold">21 September</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Time</span>
              <span className="font-bold">4:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Location</span>
              <span className="font-bold">{experience.location}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-gray-500">Local Partner</span>
              <span className="font-bold text-[#c25e3a] flex items-center"><Coffee size={16} className="mr-1"/> Heritage Café</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => router.push('/traveler')} className="bg-[#1f3a2c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2d523f] transition">
            View Trip
          </button>
          <button className="bg-white border-2 border-[#1f3a2c] text-[#1f3a2c] px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition">
            Message Host
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pb-24 md:pb-8">
      <div className="h-64 md:h-96 relative overflow-hidden">
        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        <button onClick={() => router.back()} className="absolute top-6 left-6 md:left-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition shadow-lg">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="p-8 max-w-5xl mx-auto -mt-16 relative z-10 grid md:grid-cols-3 gap-10">
        
        {/* Left Column - Details */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-wider font-bold bg-orange-50 text-[#c25e3a] px-3 py-1 rounded-md">{tag}</span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{experience.title}</h1>
          
          <div className="flex items-center text-sm font-bold text-gray-600 mb-8 border-b pb-6">
            <span className="flex items-center text-yellow-500 mr-4"><Star size={18} className="fill-current mr-1"/> {experience.rating} ({experience.reviews} reviews)</span>
            <span className="flex items-center mr-4"><MapPin size={18} className="mr-1"/> {experience.location}</span>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl mb-8 border border-gray-100">
            <div className="flex items-center">
              <img src={host.avatar} className="w-14 h-14 rounded-full border-2 border-white shadow-sm mr-4" alt={host.name} />
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Hosted by</p>
                <Link href={`/traveler/host/${host.id}`} className="font-bold text-lg text-gray-900 flex items-center hover:text-[#c25e3a] transition-colors">
                  {host.name} <ShieldCheck size={18} className="text-green-500 ml-1" />
                </Link>
              </div>
            </div>
            <Link href={`/traveler/host/${host.id}`} className="hidden sm:block text-sm font-bold text-[#1f3a2c] bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:bg-gray-50">
              View Profile
            </Link>
          </div>

          <div className="prose max-w-none text-gray-600 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">About this experience</h3>
            <p className="text-lg leading-relaxed">{experience.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's included</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {experience.included.map((item, i) => (
                <div key={i} className="flex items-center bg-green-50 text-green-800 px-4 py-3 rounded-xl">
                  <Check size={18} className="mr-2 text-green-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local Partner Spotlight</h3>
            <div className="bg-[#1f3a2c] text-white p-6 rounded-2xl flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                <Coffee size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg flex items-center">Heritage Café <ShieldCheck size={16} className="text-green-400 ml-2"/></h4>
                <p className="text-green-100 mt-1">This experience includes a stop at this beloved local business for coffee & Bengali snacks, directly supporting the neighborhood economy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 sticky top-24">
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-black text-gray-900">₹{experience.price}</span>
              <span className="text-gray-500 font-medium ml-2">/ person</span>
            </div>

            <div className="space-y-4 mb-6 border-y py-6 border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600"><Clock size={18} className="mr-2"/> Duration</div>
                <span className="font-bold">{experience.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600"><Users size={18} className="mr-2"/> Group Size</div>
                <span className="font-bold">1–5 people</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-[#1f3a2c]">
                  <option>21 September</option>
                  <option>22 September</option>
                  <option>23 September</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Time</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-[#1f3a2c]">
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Travelers</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium outline-none focus:border-[#1f3a2c]">
                  <option>1 Person</option>
                  <option>2 People</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleBook}
              disabled={bookingState !== 'idle'}
              className="w-full bg-[#c25e3a] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#a64e2f] transition shadow-md flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {bookingState === 'booking' ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> Processing...</>
              ) : (
                'Book Experience'
              )}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 font-medium">You won't be charged yet</p>
          </div>
        </div>

      </div>
    </div>
  );
}
