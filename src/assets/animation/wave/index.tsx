import React from "react";
import { StyledSVG, StyledUse } from "./style";
const WaveSVG = () => {
  return (
    <StyledSVG className="wave" viewBox="0 0 120 8">
      <defs>
        <path
          id="wave"
          d="M0,2c30,0,30,3.9,60,3.9S90,2,120,2s30,3.9,60,3.9S210,2,240,2"
        />
      </defs>
      <g className="waves">
        <StyledUse xlinkHref="#wave" x="0" y="0" />
        <StyledUse xlinkHref="#wave" x="-2" y=".25" />
        <StyledUse xlinkHref="#wave" x="-2.5" y=".5" />
        {/* <StyledUse xlinkHref="#wave" x="-5" y=".75" />
        <StyledUse xlinkHref="#wave" x="-7.5" y="1" />
        <StyledUse xlinkHref="#wave" x="-10" y="1.25" />
        <StyledUse xlinkHref="#wave" x="-12.5" y="1.5" />
        <StyledUse xlinkHref="#wave" x="-15" y="1.75" /> */}
      </g>
    </StyledSVG>
  );
};

export default WaveSVG;
