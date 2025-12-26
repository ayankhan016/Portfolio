export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-40 grid md:grid-cols-2 gap-20 items-start"
    >
      {/* Left Title */}
      <div>
        <h2 className="text-6xl md:text-7xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-teal-300 to-sky-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div>

      {/* Right Content */}
      <div className="space-y-12 text-lg md:text-xl leading-relaxed text-blue-300 max-w-2xl font-medium group">
        <p className="transition-all duration-500 hover:text-white hover:translate-x-2">
          I am a motivated and detail oriented student who has completed Class 12
          and is preparing to pursue a Bachelor’s degree in Computer Applications.
          Alongside my academic journey, I am completing a professional diploma
          in Software Programming from J&K Srinagar, where I am gaining strong
          practical experience in modern web technologies and software
          development.
        </p>

        <p className="transition-all duration-500 hover:text-white hover:translate-x-2">
          I am a problem solving developer and a critical thinker with a strong
          focus on front end development. I specialize in building user friendly,
          responsive, and scalable web applications with clean logic and modern,
          sleek design.
        </p>

        <p className="transition-all duration-500 hover:text-white hover:translate-x-2">
          I am passionate about turning ideas into functional digital solutions
          and continuously improving my technical and creative abilities.
        </p>
      </div>
    </section>
  );
}
