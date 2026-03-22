import { motion } from 'motion/react';
import { Calendar, Users, Phone, User, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Dining',
    date: '',
    guests: '2'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Hello Minari,\nI would like to book an event.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nDate: ${formData.date}\nGuests: ${formData.guests}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Reservation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Book Your <br />
              <span className="text-gold-400 italic font-light">Table or Event</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Whether it's a romantic dinner, a family get-together, or a grand celebration, secure your spot at Minari. Fill out the form or book directly via WhatsApp for instant confirmation.
            </p>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold-500 transition-colors [color-scheme:dark]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    >
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ Guests</option>
                      <option value="Event">Large Event (20+)</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                  >
                    <option value="Dining">Regular Dining</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Kitty Party">Kitty Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Corporate">Corporate Event</option>
                  </select>
                </div>

                <button 
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative h-full min-h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop" 
                alt="Reservation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
