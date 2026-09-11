import Link from "next/link";
import { Star, ShieldCheck, MapPin, Calendar, Clock, MessageSquare, ArrowLeft } from "lucide-react";
import { HOSTS, EXPERIENCES } from "@/mockData";
import { notFound } from "next/navigation";

export default function HostProfile({ params }: { params: { id: string } }) {
  const host = HOSTS.find(h => h.id === params.id);
  
  if (!host) {
    notFound();
  }

  const hostExperiences = EXPERIENCES.filter(e => e.hostId === host.id);

  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-8">
      <div className="h-48 md:h-64 bg-gray-200 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1596422846543-74c6eb27521e?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover opacity-60" />
        <Link href="/traveler" className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition shadow-sm">
          <ArrowLeft size={20} />
        </Link>
      </div>
      
      <div className="px-8 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="flex flex-col items-start">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl mb-4 bg-white">
              <img src={host.avatar} alt={host.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              {host.name}
            </h1>
            <div className="flex items-center mt-2 space-x-3">
              {host.verified && (
                <span className="flex items-center text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  <ShieldCheck size={16} className="mr-1"/> University Verified
                </span>
              )}
              {host.verified && (
                <span className="flex items-center text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <ShieldCheck size={16} className="mr-1"/> ID Verified
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-3 font-medium">{host.university}</p>
            <p className="text-gray-800 italic mt-2 max-w-lg">"{host.bio}"</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center shadow-sm">
              <MessageSquare size={18} className="mr-2" /> Message
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-bold flex items-center"><Star size={16} className="text-yellow-500 fill-current mr-1"/> {host.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Experiences</span>
                  <span className="font-bold text-gray-900">{host.experiencesCount}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {host.languages.map(lang => (
                  <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {host.interests.map(interest => (
                  <span key={interest} className="bg-orange-50 text-[#c25e3a] border border-orange-100 px-3 py-1 rounded-lg text-sm font-medium">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Experiences by {host.name.split(' ')[0]}</h2>
            <div className="space-y-6">
              {hostExperiences.map(exp => (
                <Link href={`/traveler/experience/${exp.id}`} key={exp.id} className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row h-full md:h-48">
                  <div className="w-full md:w-48 h-48 md:h-full relative overflow-hidden">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c25e3a] transition-colors line-clamp-2">{exp.title}</h3>
                        <span className="font-bold text-[#1f3a2c] bg-green-50 px-3 py-1 rounded-lg whitespace-nowrap ml-4">₹{exp.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center"><Clock size={14} className="mr-1"/> {exp.duration}</span>
                        <span className="flex items-center"><MapPin size={14} className="mr-1"/> {exp.location.split(',')[0]}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
