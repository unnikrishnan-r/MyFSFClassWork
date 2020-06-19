import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import Friendcard from "./components/Friendcard";
function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
      {friends.map(element => {
        return <Friendcard char={element} />;
      })}
    </Wrapper>
  );
}

export default App;
