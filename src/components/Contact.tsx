import { motion } from 'motion/react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-gold-400 italic font-light">Us</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Have a question or want to discuss a custom event package? We're here to help. Reach out to us via phone, email, or drop by the restaurant.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-zinc-400 hover:text-gold-400 transition-colors block">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="text-zinc-400 hover:text-gold-400 transition-colors block">+91 98765 43211</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:info@minari.com" className="text-zinc-400 hover:text-gold-400 transition-colors block">info@minari.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Opening Hours</h3>
                  <p className="text-zinc-400">Monday - Sunday</p>
                  <p className="text-zinc-400">11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-gold-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-gold-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-gold-500 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-zinc-950 rounded-xl font-semibold transition-colors shadow-lg shadow-gold-500/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
