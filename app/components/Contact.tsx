export default function Contact() {
  return (
  <section id="Contact" className="relative max-w-6xl mx-auto px-20 py-1">

      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-400 mb-10">
        Have a project or idea in mind? Let’s work together.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-5 bg-black border border-white/10 focus:border-white/40 outline-none"

        />

        <input
          type="email"
          placeholder="Your email"
    className="w-full p-5 bg-black border border-white/10 focus:border-white/40 outline-none"

        />

        <textarea
          placeholder="Your message"
          rows={5}
         className="w-full p-5 bg-black border border-white/10 focus:border-white/40 outline-none"

        />

        <button className="px-8 py-3 bg-white text-black hover:opacity-80 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
