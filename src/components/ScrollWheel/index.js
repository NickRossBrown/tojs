import React, { useState, useCallback } from "react";
import { StyledContentCenter } from "./styles/StyledContentCenter";
import { StyledWheelContainer } from "./styles/StyledWheelContainer";
import { StyledCenterButton } from "./styles/StyledCenterButton";
import Wheel from "./Wheel";

const onClick = () => {
  console.log("CLICKED");
};
const handleScroll = item => {
  console.log(item);
};

const ScrollWheel = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledContentCenter>
      <StyledWheelContainer>
        <Wheel
          value={0}
          min={0}
          max={100}
          width={220}
          height={220}
          step={5}
          fgColor="transparent"
          bgColor={"white"}
          thickness={0.6}
          onChange={handleScroll}
        />
        <StyledCenterButton onClick={onClick} size={220} />
      </StyledWheelContainer>
    </StyledContentCenter>
  );
};

export default ScrollWheel;
