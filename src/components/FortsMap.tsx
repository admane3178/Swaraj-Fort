import React, { useEffect }

export default FortsMap;
export { FortsMap };
 from "react";
import { MapContainer, TileLayer, useMap }

export default FortsMap;
export { FortsMap };
 from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet core CSS
import "leaflet.markercluster"; // side‑effect import – augments L
import "leaflet.markercluster/dist/MarkerCluster.css"; // marker‑cluster CSS
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { forts as defaultForts }

export default FortsMap;
export { FortsMap };
 from "@/data/forts";
// Fix default Leaflet icon paths (Vite/Webpack)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
}

export default FortsMap;
export { FortsMap };
);
// ---------- Types ----------
interface Fort {
  name: string;
  district: string;
  lat: number;
  lng: number;
  // other fields may exist (e.g., images)
}

export default FortsMap;
export { FortsMap };

type FortsArray = Fort[];
// ---------- Cluster component ----------
interface ClusterProps {
  forts: FortsArray;
}

export default FortsMap;
export { FortsMap };
