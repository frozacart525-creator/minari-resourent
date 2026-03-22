/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Banquet from './components/Banquet';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Banquet />
        <Reviews />
        <Gallery />
        <Booking />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
