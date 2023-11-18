import {
  ImageOverlay,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import tavern from "../../public/map-json/tavern.json";

import { latLng, latLngBounds } from "leaflet";

const LeafletMap = () => {
  const tileSize = 256;
  const bounds = latLngBounds(
    latLng(-tileSize / 1.5, tileSize / 1.5),
    latLng(tileSize / 1.5, -tileSize / 1.5),
  );
  const imageBounds = latLngBounds(
    latLng(-tileSize / 9, tileSize / 9),
    latLng(tileSize / 9, -tileSize / 9),
  );
  const tempArray = [tavern];

  const renderPolyline = () => {
    return tempArray.map((realm, index) => {
      return (
        <Polyline
          key={index}
          fill={true}
          positions={realm.area as any}
          interactive={true}
          className=""
          eventHandlers={{
            click: () => {
              console.log(realm.name);
            },
          }}
        >
          <Tooltip direction="center" offset={[-8, -2]} opacity={1} permanent>
            {realm.name}
          </Tooltip>
        </Polyline>
      );
    });
  };

  const setDynamicZoom = () => {
    if (window.innerWidth < 1920) {
      return 2.7;
    }

    if (window.innerWidth >= 1920) {
      return 2.3;
    }
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={setDynamicZoom()}
      minZoom={setDynamicZoom()}
      maxZoom={setDynamicZoom()}
      maxBounds={bounds}
      maxBoundsViscosity={1}
      scrollWheelZoom={false}
    >
      <TileLayer url="./map/{z}/{x}/{y}.jpg" noWrap={true} />
      {renderPolyline()}
    </MapContainer>
  );
};

export default LeafletMap;
