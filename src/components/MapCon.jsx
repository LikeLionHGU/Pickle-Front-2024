import React, { useState, useEffect } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";

export default function MapCon() {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCurrentPosition({ lat, lng });
        },
        () => {
          alert("위치 정보를 가져오는데 실패했습니다.");
        }
      );
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "900vh" }}>
      <Map
        center={currentPosition} // 현재 위치 불러오기
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker position={currentPosition}>
          <div style={{ color: "#000" }}>현재 위치</div>{" "}
        </MapMarker>
      </Map>
    </div>
  );
}
