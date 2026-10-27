import { motion } from 'framer-motion'; // Framer Motion for smooth entrance animations (fallback to Tailwind if needed)

// Tailwind CSS classes are used for modern styling and hover effects.
// The hero background image is applied directly to the section with a dark overlay for readability.
// Typography is upgraded with larger, more legible headings and a subtle text‑shadow.
// CTA buttons now have polished hover/focus states.
// Stats at the bottom keep a simple fade‑in.

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { forts } from '@/data/forts';

const HeroSection = () => {
  const totalForts = forts.length;
  const totalDistricts = new Set(forts.map((f) => f.district)).size;
  const coronationYear = 1674; // could derive from data if needed
  const heroImage = '/assets/hero/shivaji-hero-1920.jpg'; // public path

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/shivaji-hero.png')" }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-zinc-950" />

      {/* Main Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8'>
        {/* Intro & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className='space-y-4'
        >
          <p className='text-gold font-display text-sm md:text-base tracking-[0.3em] uppercase'>
            The Legacy of the Maratha Empire
          </p>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight'>
            THE FORTS OF <span className="text-amber-400 font-serif tracking-widest">SWARAJYA</span>
          </h1>
          <p className='mx-auto max-w-2xl text-white/80 font-body text-lg md:text-xl leading-relaxed'>
            Explore the majestic fortifications of Chhatrapati Shivaji Maharaj and Chhatrapati Sambhaji Maharaj — over {totalForts}+ forts that shaped the destiny of a nation.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <Link
            to='/forts'
            className='bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all font-serif'
          >
            Explore All Forts
          </Link>
          <Link
            to='/shivaji-maharaj'
            className='bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all font-serif'
          >
            Life of Shivaji Maharaj
          </Link>
        </motion.div>

        {/* Stats – simple fade‑in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='mt-12'
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-8">
            {[
              { num: `${totalForts}+`, label: 'Forts' },
              { num: `${totalDistricts}`, label: 'Districts' },
              { num: `${coronationYear}`, label: 'Coronation Year' },
            ].map((stat) => (
              <div key={stat.label} className="bg-zinc-900/60 backdrop-blur-md border border-amber-500/20 rounded-2xl p-6 text-center shadow-xl">
                <p className="text-4xl md:text-5xl font-display font-bold text-amber-400">{stat.num}</p>
                <p className="text-gray-300 text-sm tracking-wider uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
