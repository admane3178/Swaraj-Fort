import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet core CSS
import "leaflet.markercluster"; // side‑effect import – augments L
import "leaflet.markercluster/dist/MarkerCluster.css"; // marker‑cluster CSS
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { forts } from "@/data/forts";

// Fix default Leaflet icon paths (Vite/Webpack)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ---------- Cluster component ----------
const Cluster: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Guard – only run if the plugin attached the function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (L as any).markerClusterGroup !== "function") {
      console.error("leaflet.markercluster not loaded");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markerCluster = (L as any).markerClusterGroup();
    forts.forEach((fort) => {
      const marker = L.marker([fort.lat, fort.lng]);
      const popupContent = `<b>${fort.name}</b><br/>${fort.district}`;
      marker.bindPopup(popupContent);
      markerCluster.addLayer(marker);
    });

    map.addLayer(markerCluster);
    return () => {
      map.removeLayer(markerCluster);
    };
  }, [map]);

  return null;
};

// ---------- Component props ----------
interface FortsMapProps {
  forts?: typeof import("@/data/forts").forts;
}

// ---------- Main component ----------
const FortsMap: React.FC<FortsMapProps> = ({ forts: propForts }) => {
  const position: [number, number] = [19.0760, 72.8777]; // centre on Maharashtra

  return (
    <div role="region" aria-label="Forts map">
      <MapContainer
        center={position}
        zoom={7}
        className="h-[70vh] w-full sm:h-[80vh] md:h-[90vh]"
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Cluster />
      </MapContainer>
    </div>
  );
};

export default FortsMap;