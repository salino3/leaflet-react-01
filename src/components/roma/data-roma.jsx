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
      geocode: [41.89021, 12.492231],
      popUp: "Colosseum",
    },
    {
      id: 2,
      geocode: [41.889896, 12.481424],
      popUp: "Vatican City",
    },
    {
      id: 3,
      geocode: [41.892523, 12.485327],
      popUp: "Foro romano",
    },
    { id: 4, geocode: [41.900928, 12.483318], popUp: "Trevi Fountain" },
    { id: 5, geocode: [41.898594, 12.476848], popUp: "Pantheon" },
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
    iconUrl: "/assets/icons/arrow_01.svg",
    iconSize: [40, 22],
    iconAnchor: [20, 11],
    popupAnchor: [0, -10],
  });

  const arrowIconRotation = (rotation) => {
    return divIcon({
      className: "arrow-icon",
      html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
          style="transform: rotate(${rotation}deg);"
   >
  <polygon
    points="5,5 19,12 5,19"
    fill="green"
  />
</svg>`,
      iconSize: [40, 22],
      iconAnchor: [14, 11],
      popupAnchor: [0, -10],
    });
  };

  const calculateRotation = (point1, point2) => {
    const lat1 = point1[0],
      lon1 = point1[1];
    const lat2 = point2[0],
      lon2 = point2[1];

    const deltaLon = lon2 - lon1;
    const deltaLat = lat2 - lat1;

    return Math.atan2(deltaLat, deltaLon) * (180 / Math.PI); // Convertimos de radianes a grados
  };

  return {
    markers,
    customMarker,
    createCustomIcon,
    arrowIcon,
    calculateRotation,
    arrowIconRotation,
  };
};
