import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="text-indigo-400">SEU Computer Club</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Build, Innovate, and Transform. Join a vibrant community of
            passionate developers and tech enthusiasts.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {/* Primary Button */}
            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2"
            >
              Join Now <ArrowRight className="w-4 h-4" />
            </Link>
            {/* Secondary Button */}
            <a
              href="#events"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
  );
};

export default Hero;
