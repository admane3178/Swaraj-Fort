import { motion } from "framer-motion";
import { getDistrictsWithForts, getFortsByDistrict } from "@/data/forts";

interface DistrictMapProps {
  selectedDistrict: string;
  onSelect: (district: string) => void;
}

const DistrictMap = ({ selectedDistrict, onSelect }: DistrictMapProps) => {
  const districts = getDistrictsWithForts();

  return (
    <div className="bg-card border border-border rounded-sm p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Filter by District
      </h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect("")}
          className={`px-3 py-1.5 text-xs font-display tracking-wider uppercase rounded-sm border transition-all ${
            selectedDistrict === ""
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
          }`}
        >
          All Districts
        </button>
        {districts.map((d) => (
          <button
            key={d}
            onClick={() => onSelect(d)}
            className={`px-3 py-1.5 text-xs font-display tracking-wider uppercase rounded-sm border transition-all ${
              selectedDistrict === d
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
            }`}
          >
            {d} ({getFortsByDistrict(d).length})
          </button>
        ))}
      </div>
    </div>
  );
};

export default DistrictMap;