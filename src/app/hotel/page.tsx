"use client";

import { useState } from "react";
import { Users, CalendarCheck, Map, Star, Sparkles, Check, ChevronRight } from "lucide-react";
import { GUESTS, EXPERIENCES, HOSTS } from "@/mockData";

export default function HotelDashboard() {
  const [selectedGuest, setSelectedGuest] = useState(GUESTS[0]);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const recommendedExp = EXPERIENCES[0];
  const host = HOSTS.find(h => h.id === recommendedExp.hostId)!;

  const handleBook = () => {
    setShowBooking(true);
  };

  const confirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setShowBooking(false);
      setBookingConfirmed(false);
    }, 3000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Concierge Dashboard</h1>
        <p className="text-gray-500 mt-1">Manage your guests' local experiences.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Today's Guests" value="42" icon={<Users className="text-blue-500" />} />
        <StatCard title="LocalRoots Bookings" value="13" icon={<CalendarCheck className="text-green-500" />} />
        <StatCard title="Available Hosts" value="27" icon={<Map className="text-orange-500" />} />
        <StatCard title="Guest Satisfaction" value="4.8" icon={<Star className="text-yellow-500" />} />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Guest List */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-bold text-gray-900">Current Guests</h2>
          </div>
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-auto">
            {GUESTS.map(guest => (
              <button 
                key={guest.id}
                onClick={() => setSelectedGuest(guest)}
                className={`w-full text-left p-4 hover:bg-gray-50 transition ${selectedGuest.id === guest.id ? 'bg-green-50/50 border-l-4 border-[#1f3a2c]' : 'border-l-4 border-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-gray-900">{guest.name}</span>
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">Rm {guest.room}</span>
                </div>
                <p className="text-xs text-gray-500">{guest.stay}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Guest Assistant */}
        <div className="md:col-span-2">
          {!showBooking ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 animate-in fade-in">
              <div className="flex items-center space-x-3 mb-6 border-b pb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
                  {selectedGuest.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedGuest.name}</h2>
                  <p className="text-gray-500">Room {selectedGuest.room} • {selectedGuest.stay}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Guest Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuest.interests.map(i => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">{i}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Availability</h3>
                  <p className="font-medium text-gray-900 bg-gray-50 inline-block px-4 py-2 rounded-lg border border-gray-200">
                    {selectedGuest.availableTime}
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <div className="flex items-center mb-4 text-[#c25e3a]">
                  <Sparkles size={20} className="mr-2" />
                  <h3 className="font-bold text-lg">AI Recommended Experience</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100/50 flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <img src={recommendedExp.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900">{recommendedExp.title}</h4>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md hidden sm:inline-block">92% Match</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Hosted by {host.name}</p>
                    <div className="flex items-center justify-center sm:justify-start text-sm font-bold text-gray-900">
                      ₹{recommendedExp.price} <span className="text-gray-400 font-normal mx-2">•</span> {recommendedExp.duration}
                    </div>
                  </div>
                  <button onClick={handleBook} className="w-full sm:w-auto bg-[#1f3a2c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2d523f] transition whitespace-nowrap">
                    Book for Guest
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-right-8">
              {bookingConfirmed ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={40} strokeWidth={3} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Experience Booked Successfully</h2>
                  <p className="text-gray-500">A confirmation has been sent to {selectedGuest.name}'s room.</p>
                </div>
              ) : (
                <>
                  <div className="bg-[#1f3a2c] text-white p-6">
                    <h2 className="text-xl font-bold">Confirm Booking</h2>
                    <p className="text-green-100/70 text-sm mt-1">For {selectedGuest.name} (Room {selectedGuest.room})</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b">
                      <div>
                        <h3 className="font-bold text-lg">{recommendedExp.title}</h3>
                        <p className="text-sm text-gray-500">Host: {host.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">21 Sept</p>
                        <p className="text-sm text-gray-500">4:00 PM</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5 mb-8">
                      <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Financial Breakdown</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Guest Cost</span>
                          <span className="font-bold text-gray-900">₹{recommendedExp.price}</span>
                        </div>
                        <div className="flex justify-between text-green-700 font-medium">
                          <span>Hotel Commission (10%)</span>
                          <span>+ ₹{(recommendedExp.price * 0.1).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>Student Payout (85%)</span>
                          <span>₹{(recommendedExp.price * 0.85).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>Platform Fee (5%)</span>
                          <span>₹{(recommendedExp.price * 0.05).toFixed(0)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => setShowBooking(false)} className="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition">
                        Cancel
                      </button>
                      <button onClick={confirmBooking} className="flex-1 bg-[#c25e3a] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#a64e2f] transition">
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
