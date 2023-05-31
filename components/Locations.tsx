import { GoogleMap, LoadScript, Marker, InfoWindow  } from "@react-google-maps/api";
import { Key } from "react";

const mapStyles = {
  height: "50vh",
  width: "100%",
};

const defaultCenter = {
  lat: 40.748817, // you may need to adjust these values to center the map to your preferred location
  lng: -73.985428,
};

export interface LocationsProps {
  locations: any;
}


const Locations: React.FC<LocationsProps> = ({ locations }) => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyD2_18EQyvbZ8JP-8WdEq3gu3EFz93VqL0">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
          {locations &&
            locations.map((locationDoc: { locations: { lat: number; lng: number; _key: Key | null | undefined; }[]; }) => {
              return locationDoc.locations.map(
                (location: {
                  lat: number;
                  lng: number;
                  _key: Key | null | undefined;
                }) => {
                  return (
                    <Marker
                      key={location._key}
                      position={{
                        lat: location.lat,
                        lng: location.lng,
                      }}
                    />
                  );
                }
              );
            })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Locations;
