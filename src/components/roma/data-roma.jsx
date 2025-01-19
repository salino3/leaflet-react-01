import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

export const DataRoma = () => {
  // markers
  const markers = [
    {
      id: 1,
      geocode: [41.8902, 12.4922],
      popUp: "Colosseum",
    },
    {
      id: 2,
      geocode: [41.8899, 12.4814],
      popUp: "Vatican City",
    },
    {
      id: 3,
      geocode: [41.8925, 12.4853],
      popUp: "Foro romano",
    },
    { id: 4, geocode: [41.9009, 12.4833], popUp: "Trevi Fountain" },
    { id: 5, geocode: [41.8986, 12.4768], popUp: "Pantheon" },
  ];

  //
  const customMarker = new Icon({
    iconUrl: "/assets/icons/marker_02.svg",
    iconSize: [26, 41],
    iconAnchor: [13, 41],
    popupAnchor: [0, -41],
  });

  //
  const createCustomIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">
        ${cluster.getChildCount()}
      </div>`,
      className: "custom-marker-cluster",
      iconSize: new L.Point(30, 30),
      iconAnchor: [15, 15],
      popupAnchor: new L.Point(0, -10),
    });
  };

  // Flecha personalizada en formato SVG
  const arrowIcon = new Icon({
    iconUrl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M12 2L12 22M12 22L6 16M12 22L18 16" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    iconSize: [11, 7], // Ajusta el tamaño de la flecha
    iconAnchor: [5, 3], // Coloca el ancla en la base de la flecha
    popupAnchor: [0, -10],
  });

  return {
    markers,
    customMarker,
    createCustomIcon,
    arrowIcon,
  };
};
