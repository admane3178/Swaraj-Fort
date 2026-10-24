import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { forts } from "@/data/forts";

const HeroSection = () => {
  const totalForts = forts.length;
  const totalDistricts = new Set(forts.map((f) => f.district)).size;
  const coronationYear = 1674; // could derive from data if needed

  const heroImage = "/assets/hero/shivaji-hero.jpg"; // public path

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gold font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            The Legacy of the Maratha Empire
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-parchment leading-tight mb-6">
            The Forts of {" "}
            <span className="text-gradient-gold">Swarajya</span>
          </h1>
          <p className="text-parchment/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore the majestic fortifications of Chhatrapati Shivaji Maharaj and Chhatrapati Sambhaji Maharaj — over {totalForts} forts that shaped the destiny of a nation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild>
            <Link
              to="/forts"
              className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-sm hover:brightness-110 transition-all glow-saffron"
            >
              Explore All Forts
            </Link>
          </Button>
          <Link
            to="/shivaji-maharaj"
            className="px-8 py-3 border border-gold text-gold font-display text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all"
          >
            Life of Shivaji Maharaj
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center gap-12 md:gap-20"
        >
          {[
            { num: `${totalForts}+`, label: "Forts" },
            { num: `${totalDistricts}`, label: "Districts" },
            { num: `${coronationYear}`, label: "Coronation Year" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{stat.num}</p>
              <p className="text-parchment/60 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;