import styled from "styled-components";

export const StyledCenterButton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: ${props => props.size / 2.5}px;
  height: ${props => props.size / 2.5}px;
  border-radius: 50%;
  background: rgb(225, 225, 225);
  :active {
    filter: brightness(0.9);
  }
`;
