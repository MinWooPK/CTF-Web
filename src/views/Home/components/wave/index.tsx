// import Wave from "../../../../assets/animation/wave";

import { ContainerWave, GlobalStyle, StyledSVG, StyledUse } from "./style";

const WaveAnimation = () => {
  return (
    <ContainerWave>
      <GlobalStyle />
      <StyledSVG
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax">
          <StyledUse
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            stroke="green"
            fill="none"
          />
          <StyledUse
            xlinkHref="#gentle-wave"
            x="50"
            y="2"
            stroke="green"
            fill="none"
          />
          <StyledUse
            xlinkHref="#gentle-wave"
            x="50"
            y="7"
            stroke="green"
            fill="none"
          />{" "}
          {/* <StyledUse
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            stroke="green"
            fill="none"
          /> */}
        </g>
      </StyledSVG>
    </ContainerWave>
  );
};
export default WaveAnimation;
