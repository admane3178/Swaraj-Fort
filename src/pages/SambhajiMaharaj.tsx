import { motion } from "framer-motion";
import TimelineSection from "@/components/TimelineSection";
import { sambhajiTimeline } from "@/data/timeline";
import { BookOpen, ShieldAlert, Swords, Flame } from "lucide-react";

const SambhajiMaharaj = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <section className="bg-heritage py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-3 font-semibold">1657 – 1689</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-parchment leading-tight">
              Chhatrapati Sambhaji Maharaj
            </h1>
            <p className="text-parchment/80 font-body text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              The fearless son of Shivaji Maharaj who defended the Maratha Empire against Aurangzeb's massive army. An accomplished scholar, brilliant tactician, and an immortal symbol of courage whose supreme sacrifice ignited the fire that ultimately consumed the Mughal Empire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Sections */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The Unyielding Warrior-Scholar</h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Scholarship */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Brilliant Scholar</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Besides being a formidable warrior, Sambhaji Maharaj was highly educated and fluent in several languages including Sanskrit, Marathi, Hindi, Urdu, and Persian. He authored three acclaimed books: 'Budhbhushanam' (in Sanskrit), 'Nakhshikha', and 'Nayikabhed'. His work in Sanskrit on politics and administration remains a testament to his intellect.
              </p>
            </motion.div>

            {/* Military Might */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Swords className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Undefeated Commander</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                During his 9-year reign, Sambhaji Maharaj fought over 120 battles and did not lose a single one. He simultaneously fought on multiple fronts against the mighty Mughal Emperor Aurangzeb (who descended to the Deccan with half a million troops), the Siddis of Janjira, the Portuguese in Goa, and the Chikkadevaraya of Mysore.
              </p>
            </motion.div>

            {/* Strategic Alliance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <ShieldAlert className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Diplomacy & Strategy</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                He provided asylum to Aurangzeb's rebellious son, Prince Akbar. This masterstroke of diplomacy kept Aurangzeb deeply engaged in the Deccan, preventing him from focusing on expanding his empire elsewhere. Sambhaji Maharaj's aggressive preemptive strikes kept the enemy perpetually on the defensive.
              </p>
            </motion.div>

            {/* Supreme Sacrifice */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-900/5 z-0" />
              <div className="relative z-10">
                <Flame className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Dharmaveer</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Captured through betrayal, Sambhaji Maharaj was subjected to unimaginable torture for weeks by Aurangzeb, who demanded his surrender, treasury, and conversion. Maharaj refused to yield even an inch. His martyrdom at Tulapur united the Marathas into a raging storm that ultimately broke the back of the Mughal Empire.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TimelineSection events={sambhajiTimeline} title="The Unyielding Warrior" />

      <footer className="py-12 px-4 bg-charcoal text-center border-t border-gold/20">
        <p className="text-parchment font-display text-lg tracking-widest uppercase mb-4">
          "His sacrifice ignited the flame that burned the Mughal Empire."
        </p>
        <p className="text-gold/60 font-body text-sm">Jai Shambhuraje</p>
      </footer>
    </div>
  );
};

export default SambhajiMaharaj;
