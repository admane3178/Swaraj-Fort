import HeroSection from "@/components/HeroSection";
import FortCard from "@/components/FortCard";
import { forts } from "@/data/forts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = forts.slice(0, 6);

  return (
    <div>
      <HeroSection />

      {/* Featured Forts */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-display text-xs tracking-[0.3em] uppercase mb-2">Discover</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Legendary Forts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((fort, i) => (
            <FortCard key={fort.id} fort={fort} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/forts"
            className="inline-block px-8 py-3 border border-gold text-gold font-display text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all"
          >
            View All Forts →
          </Link>
        </div>
      </section>

      {/* Kings Section */}
      <section className="py-20 px-4 bg-heritage">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Chhatrapati Shivaji Maharaj", years: "1630 – 1680", desc: "Founder of the Maratha Empire, a visionary warrior-king who established Swarajya.", link: "/shivaji-maharaj" },
            { name: "Chhatrapati Sambhaji Maharaj", years: "1657 – 1689", desc: "The fearless successor who defended the empire against Aurangzeb's full might.", link: "/sambhaji-maharaj" },
          ].map((king, i) => (
            <motion.div
              key={king.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Link
                to={king.link}
                className="block p-8 border border-gold/30 rounded-sm hover:border-gold/60 transition-all group"
              >
                <p className="text-gold/60 font-display text-xs tracking-[0.2em] uppercase">{king.years}</p>
                <h3 className="text-2xl font-display font-bold text-parchment mt-2 group-hover:text-gradient-gold transition-colors">
                  {king.name}
                </h3>
                <p className="text-parchment/60 font-body mt-3 text-sm leading-relaxed">
                  {king.desc}
                </p>
                <span className="inline-block mt-4 text-gold font-display text-xs tracking-wider uppercase">
                  Explore Timeline →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-charcoal text-center border-t border-gold/10">
        <p className="text-parchment/40 font-display text-xs tracking-widest uppercase">
          जय शिवराय! • Jai Shivray!
        </p>
      </footer>
    </div>
  );
};

export default Index;
