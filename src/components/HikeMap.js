//Map Imports-----------------------
import React from "react";
import HikesForm from "./Forms/HikesForm"
import { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import mapStyles from "./mapStyles";

//--------------------------------------

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

//--------------------------------------

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "40vw",
};

const center = {
  lat: 37.561112,
  lng: -122.322289,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

// -------------start function--------------------------------------------------

<<<<<<< HEAD
function HikeMap({ user }) {
=======

function HikeMap({ user }) {

>>>>>>> fe35d51da2c865c2737f1b6d86b2cb8e2cd77c71
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [hikes, setHikes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [marker, setMarker] = useState([])

  useEffect(() => {
    fetch(`${url}api/v1/hikes`)
      .then((res) => res.json())
      .then((data) => setHikes(data));
  }, []);

  console.log(hikes);

  const onMapClick = React.useCallback((event) => {
    setHikes((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  function handleSetMarker(e) {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      date_created: new Date().toLocaleDateString(),
    });
  }
  // console.log("Marker Lat-Lng", marker.lat, marker.lng);
  console.log(marker)

  return (
    <div>
      {/* <h1>HikeMap</h1> */}

      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        selected={selected}
        onClick={(e) => handleSetMarker(e)}
        hikes={hikes}
      >
<<<<<<< HEAD
=======

>>>>>>> fe35d51da2c865c2737f1b6d86b2cb8e2cd77c71
        {marker ? (
          <Marker
            // scale={1}
            position={{
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.lng),
            }}
            animation={0}
            draggable={true}
            onDragEnd={handleSetMarker}
          />
        ) : (
          ""
        )}

        {hikes.map((hike) => (
          <Marker
            selected={selected}
            key={hike.id}
            draggable={false}
            // key={hike.time.toISOString()}
            position={{
              lat: parseFloat(hike.lat),
              lng: parseFloat(hike.lng),
            }}
            // position={{ lat: hike.lat, lng: hike.lng }}
<<<<<<< HEAD
=======

>>>>>>> fe35d51da2c865c2737f1b6d86b2cb8e2cd77c71
            onClick={() => {
              setSelected(hike);
              console.log(selected);
            }}
          />
        ))}

        {/* {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Hike Title</h2>
              <p>{formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null} */}
        {selected ? (
          <InfoWindow
            hikes={hikes}
            options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
            position={{
              lat: parseFloat(selected.lat),
              lng: parseFloat(selected.lng),
            }}
            onCloseClick={() => setSelected(null)}
          >
            <div className="infoWindow">
              <h2>{selected.title}</h2>
              <img
                src={selected.image_url}
                alt="mural_thumbnail"
                width="270"
                height="auto"
              />
              <p>
                {" "}
                Description:<strong>{selected.description}</strong>
              </p>
              <p>
                {" "}
                Submitted: <strong>{selected.date_created}</strong>
              </p>
              <p>
                Distance: <strong>{selected.distance} Miles</strong>
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <HikesForm hikes={hikes} setHikes={setHikes} marker={marker} setMarker={setMarker} user={user}/>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => console.log("error"),
          options
        );
      }}
    >
      <img
        src="https://www.freepnglogos.com/uploads/compass-png/compass-maximum-motivation-boot-camp-for-creators-dreamers-20.png"
        alt="locate me"
      />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 37.561112, lng: () => -122.322289 },
      radius: 40 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();

          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
          console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default HikeMap;
