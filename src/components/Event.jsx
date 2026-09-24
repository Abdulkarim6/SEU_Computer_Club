import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  Cpu,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { Gamepad2 } from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("All");

  const events = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Workshop",
      date: "Oct 15, 2026",
      time: "03:00 PM",
      location: "Lab 402, Main Building",
      status: "Upcoming",
      desc: "Learn modern web frameworks like React, Next.js, and Tailwind CSS from scratch.",
      icon: <Terminal className="w-8 h-8 text-indigo-500" />,
    },
    {
      id: 2,
      title: "Intra-SEU Hackathon 2026",
      category: "Competition",
      date: "Nov 02, 2026",
      time: "09:00 AM",
      location: "Auditorium",
      status: "Registration Open",
      desc: "A 24-hour coding marathon to solve real-world problems and win exciting prizes.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
    },
    {
      id: 3,
      title: "Cyber Security Workshop",
      category: "Workshop",
      date: "Nov 20, 2026",
      time: "02:30 PM",
      location: "Online (Zoom)",
      status: "Limited Seats",
      desc: "Understand network vulnerability, ethical hacking basics, and system security.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    },
    {
      id: 4,
      title: "SEU Gaming Carnival",
      category: "Competition",
      date: "Dec 05, 2026",
      time: "10:00 AM",
      location: "Student Lounge",
      status: "Upcoming",
      desc: "Showcase your tactical gameplay in Valorant & FIFA to win trophies and cash prizes.",
      icon: <Gamepad2 className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 5,
      title: "AI & Future Tech Seminar",
      category: "Seminar",
      date: "Dec 18, 2026",
      time: "11:00 AM",
      location: "Seminar Hall",
      status: "Registration Open",
      desc: "Explore generative AI, Machine Learning roadmaps, and tech career opportunities.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
    },
  ];

  const filteredEvents =
    activeTab === "All"
      ? events
      : events.filter((e) => e.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Events Section */}
      <section id="events" className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Featured Events & Programs
          </h2>
          <p className="text-slate-600">
            Stay updated with our latest workshops, seminars, and hackathons.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex justify-center gap-1 md:gap-3 mt-6">
            {["All", "Workshop", "Competition", "Seminar"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 md:px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab}s
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Status Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 rounded-xl bg-slate-50">{item.icon}</div>
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6">{item.desc}</p>

                {/* Event Details (Date, Time, Location) */}
                <div className="space-y-2 text-xs text-slate-500 mb-6 border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/register"
                className="w-full text-center py-2.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl transition"
              >
                Register for Event
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
