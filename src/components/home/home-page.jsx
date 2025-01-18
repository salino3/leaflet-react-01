import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./home.styles.scss";

export const HomePage = () => {
  // markers
  const markers = [
    {
      geocode: [40.6824, 14.759],
      popUp: "San Matteo`s cathedral",
    },
    {
      geocode: [40.678, 14.7597],
      popUp: "Piazza della Libertà square",
    },
    {
      geocode: [40.6852, 14.7584],
      popUp: "San Giorgio`s church",
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
      // here use 'class'
      html: `<div class="cluster-icon">
        ${cluster.getChildCount()}
      </div>`,
      // html: `<img src="/assets/icons/marker_02.svg" />`,
      className: "custom-marker-cluster",
      iconSize: new L.Point(30, 30),
      //* it does not work
      //* iconSize: point(33, 33, true),
      // cluster just on the coordinates
      iconAnchor: [15, 15],
      popupAnchor: new L.Point(0, -10),
      // popupAnchor: [0, -10],
    });
  };
  //
  // leaflet-extras.github.io/leaflet-providers/preview/
  // {z}/{x}/{y} zoom, horizontal, vertical, y
  https: return (
    <div className="containerHome">
      <MapContainer center={[40.6824, 14.759]} zoom={15}>
        {" "}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        {/* <TileLayer
          url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={22}
        /> */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png"
          maxZoom={20}
        /> */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
          maxZoom={20}
        /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
