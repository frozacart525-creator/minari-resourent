import { motion } from 'motion/react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop",
    alt: "Restaurant Ambience",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop",
    alt: "Food Plating",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop",
    alt: "Event Setup",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop",
    alt: "Fine Dining",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2996&auto=format&fit=crop",
    alt: "Banquet Hall",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
    alt: "Delicious Dessert",
    span: "col-span-1 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm bg-zinc-950/80 px-4 py-2 rounded-full backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
