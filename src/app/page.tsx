import Link from "next/link";
import { ArrowRight, MapPin, Star, ShieldCheck, Compass, Users, Map } from "lucide-react";
import { EXPERIENCES } from "@/mockData";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <MapPin className="text-[#c25e3a]" size={28} />
          <span className="font-bold text-2xl tracking-tight text-[#1f3a2c]">LocalRoots</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="#" className="hover:text-[#c25e3a] transition">Explore</Link>
          <Link href="#" className="hover:text-[#c25e3a] transition">Experiences</Link>
          <Link href="#" className="hover:text-[#c25e3a] transition">How it Works</Link>
          <Link href="/hotel" className="hover:text-[#c25e3a] transition">For Hotels</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/traveler" className="hidden md:block font-medium text-gray-700 hover:text-black">Log In</Link>
          <Link href="/traveler" className="bg-[#1f3a2c] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#2d523f] transition shadow-sm">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-12 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight text-[#1f3a2c]">
              Experience the city like a local.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover authentic food, culture, hidden gems and local experiences hosted by verified university students. From tourists to temporary locals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/traveler" className="bg-[#c25e3a] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a64e2f] transition shadow-lg text-center flex items-center justify-center">
                Explore Experiences
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/host" className="bg-white text-[#1f3a2c] border-2 border-[#1f3a2c] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition text-center">
                Become a Local Host
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 pt-8 text-sm font-medium text-gray-500">
              <div className="flex items-center"><ShieldCheck className="text-green-600 mr-2" size={18}/> Verified Local Hosts</div>
              <div className="flex items-center"><Users className="text-blue-600 mr-2" size={18}/> AI-Powered Matching</div>
              <div className="flex items-center"><Compass className="text-purple-600 mr-2" size={18}/> Hyperlocal Experiences</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Travelers exploring city"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100">
              <div className="flex items-center space-x-4 mb-3">
                <img src={EXPERIENCES[0].image} className="w-12 h-12 rounded-full object-cover" alt="Host" />
                <div>
                  <p className="font-bold text-sm">Hidden Kolkata Food Walk</p>
                  <p className="text-xs text-green-600 flex items-center"><ShieldCheck size={12} className="mr-1"/> Verified Student</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-gray-700">₹800</span>
                <span className="flex items-center text-yellow-500"><Star size={14} className="fill-current mr-1"/> 4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f3a2c] mb-4">Not another tourist trap.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're changing how you travel by solving the biggest problems with traditional tourism.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <Map size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Generic Tours</h3>
              <p className="text-gray-600">Same attractions. Same itineraries. Missing the real heartbeat of the city.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Crowded Destinations</h3>
              <p className="text-gray-600">Tourists concentrate around the same hotspots, causing overtourism.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-gray-600">Local students know the city—but have no structured way to share it.</p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mt-32 bg-[#1f3a2c] text-white rounded-[3rem] p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How LocalRoots Works</h2>
            <p className="text-xl text-green-100/80">Four simple steps to your authentic local experience.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tell us what you love", desc: "Select your vibe, interests, and available time." },
              { step: "02", title: "Get matched", desc: "Our AI finds the perfect verified local student host for you." },
              { step: "03", title: "Explore hidden gems", desc: "Experience the city through the eyes of someone who lives it." },
              { step: "04", title: "Support locals", desc: "Your booking directly supports students and local businesses." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-green-800/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-green-100/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Experiences */}
        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#1f3a2c] mb-4">Popular Local Experiences</h2>
              <p className="text-xl text-gray-600">Curated adventures in Kolkata</p>
            </div>
            <Link href="/traveler" className="text-[#c25e3a] font-medium flex items-center hover:underline">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {EXPERIENCES.slice(0, 3).map((exp) => (
              <Link href={`/traveler/experience/${exp.id}`} key={exp.id} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    ₹{exp.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">{exp.duration}</span>
                    <span>•</span>
                    <span className="flex items-center"><MapPin size={12} className="mr-1"/> {exp.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#c25e3a] transition-colors">{exp.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold mr-2">
                        {exp.hostId === 'host-1' ? 'A' : 'R'}
                      </div>
                      <span className="text-sm font-medium text-gray-600 flex items-center">
                        Host <ShieldCheck size={14} className="ml-1 text-green-500"/>
                      </span>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <Star size={14} className="text-yellow-500 fill-current mr-1" />
                      {exp.rating}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 mb-16 text-center">
          <h2 className="text-5xl font-bold text-[#1f3a2c] mb-6">Turn your next trip into a local story.</h2>
          <Link href="/traveler" className="inline-flex items-center bg-[#c25e3a] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#a64e2f] transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Exploring Now
          </Link>
        </section>
      </main>
    </div>
  );
}
