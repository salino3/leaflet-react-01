import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./home.styles.scss";

export const HomePage = () => {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3",
    },
  ];

  // Default Leaflet iconAnchor: [13, 41],
  // If 'iconAnchor' is set to [0, 0], the top-left corner of the icon
  // will be aligned with the marker's coordinates.

  const customMarker = new Icon({
    iconUrl: "/assets/icons/marker_02.svg",
    // x, y
    iconSize: [26, 41],
    iconAnchor: [13, 41],
    popupAnchor: [0, -41],
    //* shadow, not good fit with icon
    // shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    // shadowSize: [26, 41],
    // shadowAnchor: [13, 41],
  });

  //
  const createCustomIcon = (cluster) => {
    return new divIcon({
      html: `<div className="cluster-icon">
    ${cluster.getChildCount()}
  </div>`,
      // className: "custom-marker-cluster",
      iconSize: new L.Point(33, 33),
      // popupAnchor: new L.Point(0, -10),
    });
  };

  return (
    <div className="containerHome">
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
