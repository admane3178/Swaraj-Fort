import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mountain, TreePine } from "lucide-react";
import type { Fort } from "@/data/forts";

const typeIcon = {
  Hill: Mountain,
  Sea: MapPin,
  Forest: TreePine,
  Land: MapPin,
};

const FortCard = ({ fort, index }: { fort: Fort; index: number }) => {
  const Icon = typeIcon[fort.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        to={`/fort/${fort.id}`}
        className="group block bg-card rounded-sm overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 shadow-heritage"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={fort.image}
            alt={fort.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          <span className="absolute top-3 right-3 px-2 py-1 bg-charcoal/80 text-gold text-xs font-display tracking-wider uppercase rounded-sm flex items-center gap-1">
            <Icon className="w-3 h-3" />
            {fort.type}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {fort.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {fort.district} District
            {fort.altitude > 0 && ` • ${fort.altitude}m`}
          </p>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-2 font-body">
            {fort.shortDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FortCard;