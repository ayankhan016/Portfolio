export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-32">
      
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-semibold mb-4">
          <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Have a project or idea in mind? Let’s work together.
        </p>
      </div>

      <form className="space-y-8 max-w-3xl mx-auto">

        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
        />

        <textarea
          placeholder="Your message"
          rows={5}
          className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
        />

        <div className="pt-10">
          <button
            type="submit"
            className="px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 hover:shadow-lg transition"
          >
            Send Message
          </button>
        </div>

      </form>
    </section>
  );
}

