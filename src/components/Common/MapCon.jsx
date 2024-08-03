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
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={currentPosition} // 현재 위치 불러오기
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={{ lat: 37.54699, lng: 127.09598 }}
          image={{
            src: "https://github.com/LikeLionHGU/Pickle-Front-2024/blob/master/src/assets/img/marker.svg", // 마커이미지의 주소입니다
            size: {
              width: 30,
              height: 40,
            }, // 마커이미지의 크기
            options: {
              offset: {
                x: 11,
                y: 38,
              },
            },
          }}
        />
        {/* <MapMarker position={currentPosition}>
          <div style={{ color: "#000" }}>현재 위치</div>{" "}
        </MapMarker> */}
      </Map>
    </div>
  );
}
