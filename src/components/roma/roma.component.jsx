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
import { DataRoma } from "./data-roma";
import "./roma.styles.scss";

export const Roma = () => {
  const {
    markers,
    customMarker,
    createCustomIcon,
    arrowIcon,
    calculateRotation,
    arrowIconRotation,
  } = DataRoma();

  const rotation1 = calculateRotation(markers[0].geocode, markers[1].geocode);
  const rotation2 = calculateRotation(markers[1].geocode, markers[2].geocode);

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
      <MapContainer center={[41.8991, 12.4844]} zoom={15}>
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
        <Polyline
          positions={[markers[0].geocode, markers[1].geocode]}
          pathOptions={{ color: "blue", weight: 2 }}
        />
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
        <Marker
          key={"838383838"}
          position={markers[1].geocode}
          icon={arrowIconRotation(rotation1)}
        >
          <Popup>
            <h3>{markers[1].popUp}</h3>
          </Popup>
        </Marker>
        <Marker
          key={"83838383rrr8"}
          position={markers[2].geocode}
          icon={arrowIconRotation(rotation2)}
        >
          <Popup>
            <h3>{markers[2].popUp}</h3>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
