export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="flex items-center px-8 py-4">

        {/* Ayaan — EXTREME LEFT */}
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Ayaan Khan
          </span>
        </h1>

        {/* Links — pushed to right */}
        <div className="ml-auto flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}
