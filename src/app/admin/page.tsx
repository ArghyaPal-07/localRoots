"use client";

import { useState } from "react";
import { Users, UserCheck, Building, Coffee, Activity, CheckCircle, XCircle, FileText } from "lucide-react";

export default function AdminDashboard() {
  const [pendingUser, setPendingUser] = useState(true);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Platform Overview</h1>
        <p className="text-gray-500 mt-1">Real-time metrics and administration.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        <StatCard title="Total Travelers" value="1,284" icon={<Users className="text-blue-500" size={20}/>} />
        <StatCard title="Verified Students" value="342" icon={<UserCheck className="text-green-500" size={20}/>} />
        <StatCard title="Hotels" value="27" icon={<Building className="text-purple-500" size={20}/>} />
        <StatCard title="Local Businesses" value="91" icon={<Coffee className="text-orange-500" size={20}/>} />
        <StatCard title="Total Bookings" value="643" icon={<Activity className="text-red-500" size={20}/>} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Verification Queue */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h2 className="font-bold text-gray-900">Pending Verification</h2>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{pendingUser ? '12 Pending' : '11 Pending'}</span>
          </div>
          
          <div className="p-0">
            {pendingUser ? (
              <div className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Aarav+Sharma&background=random" alt="Aarav" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Aarav Sharma</h3>
                      <p className="text-sm text-gray-500">Jadavpur University • Submitted 2 hrs ago</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4 flex items-center justify-between">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <FileText size={16} className="mr-2 text-gray-400"/>
                    Student_ID_Front.jpg
                  </div>
                  <button className="text-blue-600 hover:underline text-sm font-medium">View</button>
                </div>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setPendingUser(false)} className="flex-1 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-100 transition flex items-center justify-center">
                    <CheckCircle size={16} className="mr-1"/> Approve
                  </button>
                  <button onClick={() => setPendingUser(false)} className="flex-1 bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition flex items-center justify-center">
                    <XCircle size={16} className="mr-1"/> Reject
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-gray-500">
                Queue updated.
              </div>
            )}

            <div className="p-6 border-b border-gray-100 hover:bg-gray-50 transition opacity-60">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Neha+Gupta&background=random" alt="Neha" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Neha Gupta</h3>
                    <p className="text-sm text-gray-500">Calcutta University • Submitted 5 hrs ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-5 border-b border-gray-200 bg-gray-50">
            <h2 className="font-bold text-gray-900">Recent Platform Activity</h2>
          </div>
          <div className="p-6 space-y-6">
            {[
              { text: "Heritage Hotel booked 'Hidden Food Walk' for guest Rahul Sharma.", time: "10 mins ago", type: 'hotel' },
              { text: "Ananya Sharma received a 5-star review.", time: "45 mins ago", type: 'review' },
              { text: "New Local Partner 'Bengal Bites' registered.", time: "2 hrs ago", type: 'partner' },
              { text: "Payout of ₹14,500 processed for 12 hosts.", time: "4 hrs ago", type: 'finance' },
            ].map((act, i) => (
              <div key={i} className="flex items-start">
                <div className={`w-2 h-2 rounded-full mt-2 mr-4 shrink-0 ${act.type === 'hotel' ? 'bg-purple-500' : act.type === 'review' ? 'bg-yellow-500' : act.type === 'partner' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">{act.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-2xl font-black text-gray-900 mb-1">{value}</p>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</p>
    </div>
  );
}
