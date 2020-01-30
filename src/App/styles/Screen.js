import styled from "styled-components";

export const Screen = styled.div`
  position: relative;
  display: flex;
  height: 260px;
  margin: 1.5rem 1.5rem 2rem;
  border: 4px solid darkgray;
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  animation: fadeFromBlack 0.5s;
  > div {
    user-select: none;
  }
  @keyframes fadeFromBlack {
    0% {
      filter: brightness(0);
    }
  }
`;
