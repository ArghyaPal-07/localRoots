import { Calendar, DollarSign, Star, TrendingUp, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { HOSTS, EXPERIENCES, GUESTS } from "@/mockData";

export default function HostDashboard() {
  const me = HOSTS[0]; // Ananya

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {me.name.split(' ')[0]}!</h1>
          <p className="text-gray-500 mt-1">Here's what's happening with your experiences.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold flex items-center shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available to Host
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Upcoming Bookings" value="4" icon={<Calendar className="text-blue-500" />} />
        <StatCard title="This Month" value="₹18,400" icon={<DollarSign className="text-green-500" />} />
        <StatCard title="Rating" value="4.9" icon={<Star className="text-yellow-500" />} />
        <StatCard title="Completed Tours" value="37" icon={<TrendingUp className="text-purple-500" />} />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Upcoming */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Experiences</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-l-4 border-l-[#c25e3a] p-6 flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-16 h-16 bg-orange-50 rounded-xl flex flex-col items-center justify-center mr-4 shrink-0 text-[#c25e3a]">
                  <span className="text-xs font-bold uppercase">Sep</span>
                  <span className="text-xl font-black">21</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{EXPERIENCES[0].title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock size={14} className="mr-1"/> 4:00 PM (3 hours)
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mr-2 shadow-sm">
                    {GUESTS[0].name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-700">{GUESTS[0].name}</span>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition flex items-center justify-center">
                    <MessageSquare size={16} className="mr-1"/> Message
                  </button>
                  <button className="flex-1 sm:flex-none bg-[#1f3a2c] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2d523f] transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between opacity-70">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex flex-col items-center justify-center mr-4 shrink-0 text-gray-600">
                  <span className="text-xs font-bold uppercase">Sep</span>
                  <span className="text-xl font-black">24</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{EXPERIENCES[3].title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock size={14} className="mr-1"/> 10:00 AM (2 hours)
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="font-bold text-gray-900 mb-3 text-right">₹600</span>
                <button className="w-full sm:w-auto bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-[#1f3a2c] text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <h3 className="font-bold text-xl mb-2 relative z-10">Create New Experience</h3>
            <p className="text-green-100/70 text-sm mb-6 relative z-10">Have a new idea? Create a listing and start earning.</p>
            <button className="bg-[#c25e3a] text-white w-full py-3 rounded-xl font-bold hover:bg-[#a64e2f] transition relative z-10 shadow-md">
              + New Experience
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-between">
              Recent Reviews
              <Link href="#" className="text-sm font-normal text-[#c25e3a] hover:underline flex items-center">All <ArrowRight size={14} className="ml-1"/></Link>
            </h3>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400 mr-2">
                    <Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/>
                  </div>
                  <span className="text-xs font-bold text-gray-700">Sarah</span>
                </div>
                <p className="text-sm text-gray-600 italic">"Ananya was amazing! Showed us spots we would never have found."</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
