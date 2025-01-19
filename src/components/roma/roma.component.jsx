import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./roma.styles.scss";

export const Roma = () => {
  // markers
  const markers = [
    {
      geocode: [41.8902, 12.4922],
      popUp: "Colosseum",
    },
    {
      geocode: [41.9009, 12.4833],
      popUp: "Trevi Fountain",
    },
    {
      geocode: [41.8986, 12.4768],
      popUp: "Pantheon",
    },
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

  https: return (
    <div className="containerRoma">
      <MapContainer center={[41.8991, 12.4844]} zoom={13}>
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
      </MapContainer>
    </div>
  );
};
