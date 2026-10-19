import { useParams, Link } from "react-router-dom";
import { getFortBySlug } from "@/data/forts";
import FortCarousel from "@/components/FortCarousel";
import { MapPin, Mountain, ArrowLeft, ExternalLink } from "lucide-react";

const FortDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const fort = getFortBySlug(slug || "");

  if (!fort) {
    return (
      <div className="pt-24 text-center min-h-screen">
        <h1 className="font-display text-2xl text-foreground">Fort not found</h1>
        <Link to="/forts" className="text-gold font-display text-sm mt-4 inline-block">
          ← Back to Forts
        </Link>
      </div>
    );
  }

  const mapsUrl = `https://www.google.com/maps?q=${fort.lat},${fort.lng}`;

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <FortCarousel images={fort.images ?? [fort.image]} alt={fort.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
          <Link to="/forts" className="text-gold/80 font-display text-xs tracking-wider uppercase flex items-center gap-1 mb-3 hover:text-gold">
            <ArrowLeft className="w-3 h-3" /> Back to Forts
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold text-parchment"
          >
            {fort.name}
          </motion.h1>
          <div className="flex items-center gap-4 mt-3 text-parchment/70 text-sm font-body">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{fort.district} District</span>
            <span className="flex items-center gap-1"><Mountain className="w-3 h-3" />{fort.type} Fort</span>
            {fort.altitude > 0 && <span>{fort.altitude}m altitude</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="font-display text-xl font-semibold text-foreground border-b border-gold/30 pb-2 mb-4">History</h2>
            <p className="font-body text-foreground/80 leading-relaxed">{fort.history}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="font-display text-xl font-semibold text-foreground border-b border-gold/30 pb-2 mb-4">Strategic Significance</h2>
            <p className="font-body text-foreground/80 leading-relaxed">{fort.significance}</p>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-sm p-5">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">Technical Data</h3>
            <dl className="space-y-2 text-sm font-body">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Type</dt>
                <dd className="text-foreground font-medium">{fort.type} Fort</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">District</dt>
                <dd className="text-foreground font-medium">{fort.district}</dd>
              </div>
              {fort.altitude > 0 && (
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Altitude</dt>
                  <dd className="text-foreground font-medium">{fort.altitude}m</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Coordinates</dt>
                <dd className="text-foreground font-medium text-xs">{fort.lat.toFixed(4)}°N, {fort.lng.toFixed(4)}°E</dd>
              </div>
            </dl>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-display text-xs tracking-wider uppercase rounded-sm hover:brightness-110 transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Open in Google Maps
          </a>

          {/* Embedded Map */}
          <div className="rounded-sm overflow-hidden border border-border">
            <iframe
              title={`${fort.name} location`}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${fort.lat},${fort.lng}&zoom=13&maptype=satellite`}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortDetail;
