import { motion } from 'motion/react';
import { Utensils, Users, Sparkles, MapPin } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-gold-500" />,
      title: "Tasty Food",
      description: "Authentic flavors prepared by expert chefs."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: "Great Ambience",
      description: "Premium interior design for a perfect dining experience."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: "Friendly Staff",
      description: "Professional service that makes you feel at home."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      title: "Perfect Venue",
      description: "Ideal location in Dhanbad for family & events."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-gold-500/30 p-6 rounded-2xl shadow-xl backdrop-blur-sm hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-gold-500 font-bold">4.7</div>
                <div>
                  <div className="flex text-gold-400 text-sm">
                    ★★★★★
                  </div>
                  <div className="text-zinc-400 text-sm mt-1">400+ Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Discover Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Premium Dining & <br />
              <span className="text-gold-400 italic font-light">Banquet Experience</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Welcome to Minari, where culinary excellence meets elegant surroundings. Located in the heart of Dhanbad, we offer a sophisticated atmosphere perfect for intimate dinners, family gatherings, and grand celebrations. Our commitment to quality ingredients and exceptional service ensures every visit is memorable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
