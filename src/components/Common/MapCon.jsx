import React, { useState, useEffect } from "react";
import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import MarkerImg from "../../assets/img/PickedCourse.svg";

export default function MapCon() {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [zoomable, setZoomable] = useState(false);

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
    setZoomable(false);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={currentPosition} // 현재 위치 불러오기
        style={{ width: "100%", height: "100%" }}
        // draggable={false}
        zoomable={zoomable}
      >
        <MapMarker
          position={{ lat: 37.54699, lng: 127.09598 }}
          image={{
            src: "https://raw.githubusercontent.com/LikeLionHGU/Pickle-Front-2024/master/src/assets/img/marker.svg",
            size: {
              width: 40,
              height: 50,
            }, // 마커이미지 크기
            options: {
              offset: {
                x: 20,
                y: 50,
              },
            },
          }}
        />
        <MapMarker position={currentPosition}>
          {/* <div style={{ color: "#000" }}>현재 위치</div>{" "} */}
        </MapMarker>
        <ZoomControl />
      </Map>
    </div>
  );
}
