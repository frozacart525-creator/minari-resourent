import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-3xl font-bold text-white tracking-wider mb-6 block">
              MINARI<span className="text-gold-500">.</span>
            </a>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Premium restaurant and banquet hall in Dhanbad, offering exquisite dining and perfect event spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-zinc-800 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-zinc-800 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-zinc-800 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-400 hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-zinc-400 hover:text-gold-500 transition-colors">Our Menu</a></li>
              <li><a href="#banquet" className="text-zinc-400 hover:text-gold-500 transition-colors">Banquet & Events</a></li>
              <li><a href="#gallery" className="text-zinc-400 hover:text-gold-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-400">Aman Market, Baliapur Road, near Surya Realcon, Karmatand, Damodarpur, Jharkhand 826005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-zinc-400 hover:text-gold-500 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@minari.com" className="text-zinc-400 hover:text-gold-500 transition-colors">info@minari.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Monday - Friday</span>
                <span className="text-gold-500">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Saturday</span>
                <span className="text-gold-500">11:00 - 23:30</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-gold-500">11:00 - 23:30</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Minari Restaurant & Banquet Hall. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
