import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  LayersControl,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import leafIcon from "../assets/images/damage-leaf.png";
import diseasedImg from "../assets/images/leaf.JPG";


const MapComponent = () => {
  const diseasedCrop1 = [12.963028, 80.056211];
  const diseasedCrop2 = [12.963001, 80.056407];
  const diseasedCrop3 = [12.963673, 80.056467];

  // custom marker
  const customIcon = new L.Icon({
    iconUrl: leafIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    // ⭐ have to find center using all coordinates
    // ⭐ have to find better satellite map tile (map layer) for more zoom-in
    <MapContainer
      center={[12.963028, 80.056211]}
      zoom={40}
      className="w-full h-full mx-auto"
    >
      <LayersControl>
        <LayersControl.BaseLayer name="Satellite" checked={true}>
          {/* <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Esri</a>'
            /> */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Esri</a>'
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      <Marker position={diseasedCrop1} icon={customIcon}>
        <Tooltip>Diseased Crop</Tooltip>
        <Popup>
          <img className="rounded-md" src={diseasedImg} alt="" />
        </Popup>
      </Marker>

      <Marker position={diseasedCrop2} icon={customIcon}>
        <Tooltip>Diseased Crop</Tooltip>
        <Popup>
          <img className="rounded-md" src={diseasedImg} alt="" />
        </Popup>
      </Marker>

      <Marker position={diseasedCrop3} icon={customIcon}>
        <Tooltip>Diseased Crop</Tooltip>
        <Popup>
          <img className="rounded-md" src={diseasedImg} alt="" />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
