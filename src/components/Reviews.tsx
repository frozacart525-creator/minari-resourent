import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Amazing food & service! Hosted my daughter's birthday here and everything was perfect. Highly recommend the Reshmi Kabab.",
    rating: 5
  },
  {
    name: "Priya Singh",
    text: "Best place for parties in Dhanbad. The ambience is premium and the staff is very cooperative. Will definitely visit again.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    text: "Great ambience and vibes. The banquet hall is spacious and beautifully decorated. Food quality is top-notch.",
    rating: 4
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white ml-2">4.7</span>
          </div>
          <p className="text-zinc-400">Based on 400+ positive reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800" />
              <div className="flex text-gold-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gold-500 font-bold uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <span className="text-zinc-500 text-sm">Verified Guest</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
