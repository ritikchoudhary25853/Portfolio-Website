import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
  <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 text-white">
     <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
     <h1 className="text-2xl font-bold text-indigo-500">Ritik Portfolio</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link to="/home" className="hover:text-indigo-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
      </ul>
    </div>
  </nav>
)};

export default NavBar
