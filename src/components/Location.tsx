import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Location
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Address Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 lg:col-span-1 h-full flex flex-col justify-center"
          >
            <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Minari Restaurant & Banquet Hall</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Aman Market, Baliapur Road,<br />
              near Surya Realcon, Karmatand,<br />
              Damodarpur, Jharkhand 826005
            </p>
            <a 
              href="https://maps.google.com/?q=Minari+Restaurant+Banquet+Hall+Dhanbad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-zinc-950 rounded-full font-semibold transition-colors w-full"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-zinc-800"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456789!2d86.4234567!3d23.7987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzU1LjYiTiA4NsKwMjUnMjQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Minari Location Map"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
