import React from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY
});

const Map = () => {
  return (
    <MapComponent
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      //Event is passed as the second argument of the callback function
      onClick={(_, event) => {
        console.log(event)
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </MapComponent>
  );
};

export default Map;
