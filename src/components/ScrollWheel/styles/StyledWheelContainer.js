import styled from "styled-components";

export const StyledWheelContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
