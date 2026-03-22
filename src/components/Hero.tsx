import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop"
          alt="Restaurant Ambience"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
            Welcome to Minari
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Celebrate Every <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Occasion
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 font-light">
            Delicious food, beautiful ambience & perfect venue for parties in Dhanbad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-zinc-950 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              Book a Party
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-500 hover:border-gold-400 text-white hover:text-gold-400 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs text-zinc-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
