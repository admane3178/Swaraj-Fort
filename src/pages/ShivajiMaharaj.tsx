import { motion } from "framer-motion";
import TimelineSection from "@/components/TimelineSection";
import { shivajiTimeline } from "@/data/timeline";
import { Shield, Anchor, ScrollText, Sword } from "lucide-react";

const ShivajiMaharaj = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-heritage py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-3 font-semibold">1630 – 1680</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-parchment leading-tight">
              Chhatrapati Shivaji Maharaj
            </h1>
            <p className="text-parchment/80 font-body text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              The founder of the Maratha Empire, a visionary warrior-king who carved Swarajya (self-rule) from the might of formidable empires. His progressive governance, innovative military strategy, and unwavering commitment to justice remain unparalleled.
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The Pillars of Swarajya</h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Administration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-amber-500 bg-zinc-900/80 rounded-r-2xl p-6 shadow-md mb-6"
            >
              <ScrollText className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Ashtapradhan Mandal</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Shivaji Maharaj instituted a council of eight ministers to effectively manage his expanding empire. Unlike contemporary rulers, he did not allow these ministerial posts to become hereditary. His governance emphasized meritocracy, secularism, and strict adherence to law, ensuring that peasants (ryots) were protected from exploitation by feudal lords (watandars).
              </p>
            </motion.div>

            {/* Military */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-l-4 border-amber-500 bg-zinc-900/80 rounded-r-2xl p-6 shadow-md mb-6"
            >
              <Sword className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Ganimi Kava (Guerrilla Warfare)</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Realizing the numerical superiority of Mughal and Adilshahi forces, Maharaj perfected the art of Guerrilla Warfare in the Sahyadri mountains. He utilized speed, surprise, and terrain to outmaneuver massive armies. His forts served as impregnable bases from which rapid, devastating strikes were launched against the enemy.
              </p>
            </motion.div>

            {/* Navy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-amber-500 bg-zinc-900/80 rounded-r-2xl p-6 shadow-md mb-6"
            >
              <Anchor className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Father of the Indian Navy</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Recognizing the strategic importance of the coastline, Shivaji Maharaj built a formidable navy to counter the Siddis, Portuguese, and British. He constructed formidable sea forts like Sindhudurg and Vijaydurg. His vision transformed the Maratha Empire into a maritime power that secured the Konkan coast.
              </p>
            </motion.div>

            {/* Fortifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-4 border-amber-500 bg-zinc-900/80 rounded-r-2xl p-6 shadow-md mb-6"
            >
              <Shield className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Master of Fortifications</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                "The essence of the whole kingdom is forts." Maharaj understood this deeply. During his lifetime, he built, captured, or renovated nearly 300 forts across Maharashtra. These forts were not just military garrisons but complex ecosystems equipped to sustain long sieges, serving as the very backbone of Swarajya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TimelineSection events={shivajiTimeline} title="The Journey of a Legend" />

      <footer className="py-12 px-4 bg-charcoal text-center border-t border-gold/20">
        <p className="text-parchment font-display text-lg tracking-widest uppercase mb-4">
          "Even if there were a sword in the hands of everyone, it is willpower that establishes a kingdom."
        </p>
        <p className="text-gold/60 font-body text-sm">Jai Bhavani, Jai Shivaji</p>
      </footer>
    </div>
  );
};

export default ShivajiMaharaj;
