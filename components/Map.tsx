import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { Key, useState } from "react";

const mapStyles = {
  height: "100%",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const defaultCenter = {
  lat: 46.6798,
  lng: -110.0448,
};

export interface LocationsProps {
  locations: {
    _id: Key | null | undefined;
    name: string;
    description: string;
    locations: {
      lat: number;
      lng: number;
      _key: Key | null | undefined;
    }[];
  }[];
}

const defaultMapOptions = {
  disableDefaultUI: true,
};

const Map: React.FC<LocationsProps> = ({ locations }) => {
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
    <div className="mt-10 mb-10 mx-auto h-[50vh] w-full md:w-[50vw] rounded-lg overflow-hidden">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
          options={defaultMapOptions}
        >
          {locations &&
            locations.map((locationDoc: { locations: any[] }) => {
              return locationDoc.locations.map(
                (location: {
                  _key: React.Key | null | undefined;
                  lat: any;
                  lng: any;
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
            })}

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
                <h2 className="text-[24px] font-bold">
                  {selectedLocation.name}
                </h2>
                <p className="text-[16px]">{selectedLocation.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
