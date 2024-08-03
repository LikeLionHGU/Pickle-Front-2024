import React, { useState } from "react";
import styled from "styled-components";

export default function SliderCom({ selectedPrice, onPriceChange }) {
  const fixedMinPrice = 0;
  const fixedMaxPrice = 100000;
  const priceGap = 1000;

  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value + priceGap <= rangeMaxValue) {
      setRangeMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - priceGap >= rangeMinValue) {
      setRangeMaxValue(value);
    }
  };

  const handleApplyClick = () => {
    onPriceChange(rangeMinValue, rangeMaxValue);
  };

  return (
    <SliderContainer>
      <Slider>
        <SliderTrack />
        <SliderRange
          style={{
            left: `${(rangeMinValue / fixedMaxPrice) * 100}%`,
            right: `${100 - (rangeMaxValue / fixedMaxPrice) * 100}%`,
          }}
        />
        <Thumb
          type="range"
          min={fixedMinPrice}
          max={fixedMaxPrice - priceGap}
          step={priceGap}
          value={rangeMinValue}
          onChange={handleMinChange}
        />
        <Thumb
          type="range"
          min={fixedMinPrice + priceGap}
          max={fixedMaxPrice}
          step={priceGap}
          value={rangeMaxValue}
          onChange={handleMaxChange}
        />
      </Slider>
      <PriceContainer>
        <PriceDisplay>
          {rangeMinValue.toLocaleString()}원 ~ {rangeMaxValue.toLocaleString()}
          원
        </PriceDisplay>
        <ApplyButton onClick={handleApplyClick}>적용</ApplyButton>
      </PriceContainer>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 280px;
  margin: 58px auto;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
`;

const SliderTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #e8e8e8;
  border-radius: 5px;
`;

const SliderRange = styled.div`
  position: absolute;
  height: 3px;
  background-color: #4aabf9;
  background-image: linear-gradient(90deg, #cae7ff, #1786e0);
  border-radius: 5px;
`;

const Thumb = styled.input`
  position: absolute;
  width: 100%;
  height: 5px;
  -webkit-appearance: none;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #4aabf9;
    cursor: pointer;
    -webkit-appearance: none;
    position: relative;
    top: -3px;
  }

  &:nth-of-type(1) {
    z-index: 1;
  }

  &:nth-of-type(2) {
    z-index: 2;
  }
`;

const PriceContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const PriceDisplay = styled.div`
  font-size: 16px;
`;

const ApplyButton = styled.button`
  margin-top: 25px;
  width: 100px;
  height: 29px;
  border: none;
  border-radius: 30px;
  background-color: #4aabf9;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #1786e0;
  }
`;
