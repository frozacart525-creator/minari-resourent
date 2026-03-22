import { motion } from 'motion/react';
import { PartyPopper, Cake, Users, CalendarHeart } from 'lucide-react';

export default function Banquet() {
  const events = [
    {
      icon: <Cake className="w-8 h-8 text-gold-500" />,
      title: "Birthday Parties",
      description: "Make your special day unforgettable with our tailored birthday packages and stunning decorations."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Kitty Parties",
      description: "Enjoy a delightful afternoon with friends, featuring customized menus and elegant setups."
    },
    {
      icon: <CalendarHeart className="w-8 h-8 text-gold-500" />,
      title: "Small Events",
      description: "Perfect for corporate gatherings, anniversaries, and intimate celebrations."
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-gold-500" />,
      title: "Family Gatherings",
      description: "Spacious and comfortable settings for memorable family reunions and get-togethers."
    }
  ];

  return (
    <section id="banquet" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Host Your Events
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Perfect Venue <br />
              <span className="text-gold-400 italic font-light">for Every Occasion</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Our premium banquet hall is designed to host a variety of events with elegance and style. From intimate gatherings to grand celebrations, we provide the perfect backdrop, exceptional catering, and impeccable service to make your event truly special.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {events.map((event, index) => (
                <div key={index} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-gold-500/30 transition-colors">
                  <div className="mb-4">
                    {event.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{event.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-block px-8 py-4 bg-gold-500 hover:bg-gold-600 text-zinc-950 rounded-full font-semibold transition-all shadow-lg shadow-gold-500/20"
            >
              Book Your Event Now
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2996&auto=format&fit=crop" 
                alt="Banquet Setup" 
                className="w-full h-64 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8892b125f4?q=80&w=2940&auto=format&fit=crop" 
                alt="Event Decoration" 
                className="w-full h-64 object-cover rounded-2xl mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
