import { motion } from 'motion/react';

const menuItems = [
  {
    name: "Reshmi Kabab",
    description: "Tender chicken pieces marinated in a creamy, mildly spiced yogurt mixture and grilled to perfection.",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2864&auto=format&fit=crop",
    category: "Starters"
  },
  {
    name: "Paneer Tikka",
    description: "Cottage cheese cubes marinated in spices and grilled in a tandoor.",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2817&auto=format&fit=crop",
    category: "Starters"
  },
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with a spiced potato mixture, served with sambar and chutneys.",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop",
    category: "South Indian"
  },
  {
    name: "Butter Chicken",
    description: "Classic North Indian dish featuring tender chicken in a rich, creamy tomato gravy.",
    price: "₹449",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2940&auto=format&fit=crop",
    category: "North Indian"
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils and kidney beans in a creamy, buttery sauce.",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2940&auto=format&fit=crop",
    category: "North Indian"
  },
  {
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb dish of Persian origin, cooked with intense spices in a creamy sauce.",
    price: "₹549",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2836&auto=format&fit=crop",
    category: "North Indian"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Culinary Delights
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Signature Menu
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-gold-500/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm text-gold-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-white">{item.name}</h3>
                  <span className="text-gold-400 font-semibold">{item.price}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-zinc-950 rounded-full font-semibold transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
