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
    iconUrl: "/assets/icons/arrow_01.svg",
    iconSize: [40, 22],
    iconAnchor: [20, 11],
    popupAnchor: [0, -10],
  });

  const arrowIconRotation = (rotation) => {
    return divIcon({
      className: "arrow-icon",
      html: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="transform: rotate(${rotation}deg);"
        >
          <polygon points="5,19 12,12 19,19" fill="green" />
        </svg>
      `,
      iconSize: [40, 22],
      iconAnchor: [20, 11],
      popupAnchor: [0, -10],
    });
  };

  // const calculateRotation = (start, end) => {
  //   const deltaX = end[1] - start[1]; // longitud
  //   const deltaY = end[0] - start[0]; // latitud
  //   const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //   return angle;
  // };

  const calculateRotation = (point1, point2) => {
    const lat1 = point1[0],
      lon1 = point1[1];
    const lat2 = point2[0],
      lon2 = point2[1];

    // Calcular la diferencia de longitudes y latitudes
    const deltaLon = lon2 - lon1;
    const deltaLat = lat2 - lat1;

    // Calcular el ángulo de rotación con atan2 (en radianes)
    const angle = Math.atan2(deltaLat, deltaLon) * (180 / Math.PI); // Convertir de radianes a grados

    // Ajustar el ángulo de 0 a 360
    let adjustedAngle = (angle + 360) % 360;

    // Si el ángulo es negativo, se ajusta al rango [0, 360]
    if (adjustedAngle < 0) {
      adjustedAngle += 360;
    }

    // Ajuste adicional para que el ángulo sea en sentido contrario a las agujas del reloj, si es necesario
    // Deberíamos invertir el ángulo para que el mapa tenga el comportamiento esperado (dirección de derecha a izquierda)
    adjustedAngle = (adjustedAngle + 90) % 360;

    return adjustedAngle;
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
