import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapComponent = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_KEY,
    logoPosition: "top-left",
    renderWorldCopies: true,
    dragRotate: false,
});

const Map = () => {
    return (
        <MapComponent
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: "100vh",
                width: "100vw",
            }}
            onClick={(event) => {
                console.log(event);
            }}
        >
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "harbor-15" }}
            >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "harbor-15" }}
            >
                <Feature
                    coordinates={[-10.481747846041145, 100.3233379650232]}
                />
            </Layer>
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "harbor-15" }}
            >
                <Feature coordinates={[50.481747846041145, 50.3233379650232]} />
            </Layer>
        </MapComponent>
    );
};

export default Map;
