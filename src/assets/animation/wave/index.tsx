import React from "react";
import { WavePath, WaveSVG } from "./style";
const Waves: React.FC = () => {
  return (
    <WaveSVG viewBox="0 0 100 8">
      <defs>
        <path
          id="wave"
          d="M0,2c30,0,30,3.9,60,3.9S90,2,120,2 s30,3.9,60,3.9S210,2,240,2"
        />
      </defs>
      <g className="waves">
        {[...Array(8)].map((_, index) => (
          <WavePath
            as="use"
            key={index}
            xlinkHref="#wave"
            x="0"
            y={index * 0.55}
            duration={`${7 + index * 3}s`}
          />
        ))}
      </g>
    </WaveSVG>
  );
};

export default Waves;
