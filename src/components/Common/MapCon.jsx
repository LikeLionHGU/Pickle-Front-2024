import React, { useState, useEffect } from "react";
import {
  Map,
  MapMarker,
  ZoomControl,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
import MarkerImg from "../../assets/img/PickedCourse.svg";
import styled from "styled-components";

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
        zoomable={zoomable}
      >
        <MapMarker
          position={currentPosition}
          image={{
            src: MarkerImg,
            size: {
              width: 25,
              height: 35,
            },
            options: {
              offset: {
                x: 25,
                y: 35,
              },
            },
          }}
        ></MapMarker>
        <CustomOverlayMap position={currentPosition} yAnchor={1}>
          <OverlayWrapper>
            <a
              href={`https://map.kakao.com/link/map/${currentPosition.lat},${currentPosition.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="title">클래스 위치 정보 자세히 보기</span>
            </a>
          </OverlayWrapper>
        </CustomOverlayMap>
        <ZoomControl />
      </Map>
    </div>
  );
}

const OverlayWrapper = styled.div`
  background-color: #4aabf9;
  color: white;
  width: 191px;
  height: 44px;
  border-radius: 10px;
  padding: 11px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: translateY(-50px);

  .title {
    color: #333;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    background-color: #4aabf9;
  }
`;
