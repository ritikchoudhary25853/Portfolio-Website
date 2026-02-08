import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-500">
          Ritik Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to="/home" className="hover:text-indigo-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black/80 backdrop-blur-lg px-6 py-4 space-y-4 text-sm">
          <li><Link onClick={() => setOpen(false)} to="/home">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/projects">Projects</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
