import React from "react";
import styled from "styled-components";

const StarRating = ({ score }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index}>
      <FullStarWrapper width={`${Math.min((score - index) * 100, 100)}%`} />
    </Star>
  ));
  return <StarWrapper>{stars}</StarWrapper>;
};

export default StarRating;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  background-color: lightgray;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

const FullStarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: 100%;
  background-color: gold;
  clip-path: inherit;
  overflow: hidden;
`;
