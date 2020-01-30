import React from "react";
import { Container } from "./styles/Container";
import { IpodFrame } from "./styles/IpodFrame";
import { Screen } from "./styles/Screen";
import ScrollWheel from "../components/ScrollWheel/index.js";


const handleClick = () => {
  console.log("CLICKED");
};

const App = () => (
  <Container>
    <IpodFrame>
      <Screen />
      {/* <ScrollWheel /> */}
      <ScrollWheel />
    </IpodFrame>
  </Container>
);

export default App;
