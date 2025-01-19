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
import "./roma.styles.scss";

export const Roma = () => {
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

  // Polyline positions for all points except the last connection

  const bluePolylinePositions = markers
    .slice(0, -1)
    .map((marker) => marker.geocode);

  // Polyline positions for the last connection
  const redPolylinePositions = [
    markers[markers.length - 2].geocode,
    markers[markers.length - 1].geocode,
  ];
  https: return (
    <div className="containerRoma">
      <MapContainer center={[41.8991, 12.4844]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomIcon}
        >
          {markers &&
            markers?.length > 0 &&
            markers.map((marker) => (
              <Marker
                position={marker.geocode}
                key={marker.geocode.join("")}
                popup={marker.popUp}
                icon={customMarker}
              >
                <Popup>
                  <h3>{marker.popUp}</h3>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
        {/* Blue polyline for general connections */}
        <Polyline
          positions={bluePolylinePositions}
          pathOptions={{ color: "blue", weight: 2 }}
        />

        {/* Red polyline for the last connection */}
        <Polyline
          positions={redPolylinePositions}
          pathOptions={{ color: "red", weight: 2 }}
        />
      </MapContainer>
    </div>
  );
};
