import { motion } from 'framer-motion'; // Framer Motion for smooth entrance animations (fallback to Tailwind if needed)
// 1️⃣ NOTE: The motion component will animate the whole hero content
// 2️⃣ Tailwind classes are used for modern styling and hover effects.
// 3️⃣ The Button component from the UI library provides a clean, responsive CTA.
// 4️⃣ The hero background image is kept as before, but we add an overlay gradient for readability.
// 5️⃣ Typography is upgraded with larger, more legible headings and a subtle text‑shadow.
// 6️⃣ CTA buttons now have polished hover/focus states.
// 7️⃣ Stats at the bottom keep a simple fade‑in.
// (If you prefer to remove Framer Motion, you can replace motion.div with normal div and use Tailwind's animate‑fade‑in utilities.)
// 8️⃣ Ensure that the `Button` component supports the `asChild` prop as implemented in src/components/ui/button.tsx.
// 9️⃣ Import paths assume a Vite alias `@` pointing to `src`.
// 🛠️ Feel free to tweak the animation durations or tailwind colors to match your brand.

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { forts } from '@/data/forts';

const HeroSection = () => {
  const totalForts = forts.length;
  const totalDistricts = new Set(forts.map((f) => f.district)).size;
  const coronationYear = 1674; // could derive from data if needed
  const heroImage = '/assets/hero/shivaji-hero.jpg'; // public path

  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90' />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-4 text-center'>
        {/* Intro & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className='space-y-4'
        >
          <p className='text-gold font-display text-sm md:text-base tracking-[0.3em] uppercase'>
            The Legacy of the Maratha Empire
          </p>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-display font-bold text-parchment leading-tight'>
            The Forts of{' '}
            <span className='text-gradient-gold'>Swarajya</span>
          </h1>
          <p className='mx-auto max-w-2xl text-parchment/80 font-body text-lg md:text-xl leading-relaxed'>
            Explore the majestic fortifications of Chhatrapati Shivaji Maharaj and Chhatrapati Sambhaji Maharaj — over {totalForts} forts that shaped the destiny of a nation.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          {/* Primary CTA – uses the Button component with asChild to keep button styling on the Link */}
          <Button asChild>
            <Link
              to='/forts'
              className='px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase rounded-md hover:brightness-110 transition-all'
            >
              Explore All Forts
            </Link>
          </Button>
          {/* Secondary CTA – simple styled Link with hover effect */}
          <Link
            to='/shivaji-maharaj'
            className='px-8 py-3 border border-gold text-gold font-display text-sm tracking-wider uppercase rounded-md hover:bg-gold/10 transition-colors'
          >
            Life of Shivaji Maharaj
          </Link>
        </motion.div>

        {/* Stats – simple fade‑in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16'
        >
          {[{ num: `${totalForts}+`, label: 'Forts' }, { num: `${totalDistricts}`, label: 'Districts' }, { num: `${coronationYear}`, label: 'Coronation Year' }].map((stat) => (
            <div key={stat.label} className='text-center'>
              <p className='text-4xl md:text-5xl font-display font-bold text-gradient-gold'>{stat.num}</p>
              <p className='text-parchment/60 text-xs tracking-widest uppercase mt-1'>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
