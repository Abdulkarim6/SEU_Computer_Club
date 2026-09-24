import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            SEU Computer Club
          </h3>
          <p className="text-sm text-slate-400">
            Empowering Southeast University students through code, innovation,
            and leadership.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MdLocationOn className="w-5 h-5 text-indigo-400" /> Southeast
            University, Dhaka
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MdEmail className="w-5 h-5 text-indigo-400" />{" "}
            computerclub@seu.edu.bd
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone className="w-5 h-5 text-indigo-400" /> +880 1700-000000
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8 pt-4 border-t border-slate-800">
        © 2026 SEU Computer Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
