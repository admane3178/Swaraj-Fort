import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { forts, fortTypes, type FortType } from "@/data/forts";
import FortCard from "@/components/FortCard";
import DistrictMap from "@/components/DistrictMap";
import { motion } from "framer-motion";

const FortsListing = () => {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");
  const [type, setType] = useState<FortType | "">("");

  const filtered = useMemo(() => {
    return forts.filter((f) => {
      const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.district.toLowerCase().includes(search.toLowerCase());
      const matchDistrict = district === "" || f.district === district;
      const matchType = type === "" || f.type === type;
      return matchSearch && matchDistrict && matchType;
    });
  }, [search, district, type]);

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-gold font-display text-xs tracking-[0.3em] uppercase mb-2">Database</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            The Forts of Maharashtra
          </h1>
          <p className="text-muted-foreground font-body mt-2">
            Showing {filtered.length} of {forts.length} forts
          </p>
        </motion.div>

        {/* Search & Type Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search forts by name or district..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="flex gap-2">
            {(["", ...fortTypes] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t as FortType | "")}
                className={`px-3 py-2 text-xs font-display tracking-wider uppercase rounded-sm border transition-all ${
                  type === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-gold/50"
                }`}
              >
                {t || "All"}
              </button>
            ))}
          </div>
        </div>

        {/* District Filter */}
        <div className="mb-8">
          <DistrictMap selectedDistrict={district} onSelect={setDistrict} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((fort, i) => (
              <FortCard key={fort.id} fort={fort} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body">No forts found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortsListing;
