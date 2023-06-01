import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Key, useState } from "react";

const mapStyles = {
  height: "50vh",
  width: "50%",
};

const defaultCenter = {
  lat: 40.748817, // you may need to adjust these values to center the map to your preferred location
  lng: -73.985428,
};

export interface LocationsProps {
  locations: any;
}

const Locations: React.FC<LocationsProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    description: string;
    locations: {
      lat: number;
      lng: number;
      _key: Key | null | undefined;
    }[];
  } | null>(null);

  return (
    <div className="mt-10 mb-10 mx-auto w-1/2 h-1/2">
      <LoadScript googleMapsApiKey="AIzaSyD2_18EQyvbZ8JP-8WdEq3gu3EFz93VqL0">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={4}
          center={defaultCenter}
        >
          {locations &&
            locations.map(
              (locationDoc: {
                locations: {
                  lat: number;
                  lng: number;
                  _key: Key | null | undefined;
                }[];
              }) => {
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
                        onClick={() => {
                          setSelectedLocation(locationDoc as any);
                        }}
                      />
                    );
                  }
                );
              }
            )}

          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.locations[0].lat,
                lng: selectedLocation.locations[0].lng,
              }}
              onCloseClick={() => {
                setSelectedLocation(null);
              }}
            >
              <div>
                <h2>{selectedLocation.name}</h2>
                <p>{selectedLocation.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Locations;
