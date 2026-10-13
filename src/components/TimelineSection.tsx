import { motion } from "framer-motion";
import type { TimelineEvent } from "@/data/timeline";

const TimelineSection = ({ events, title }: { events: TimelineEvent[]; title: string }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
          {title}
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-primary to-gold" />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-auto top-1 w-3 h-3 rounded-full bg-gold border-2 border-charcoal md:right-auto"
                  style={isLeft ? { right: "-6.5px", left: "auto" } : { left: "-6.5px" }}
                />

                <span className="text-gold font-display text-sm font-bold tracking-wider">
                  {event.year}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                  {event.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;