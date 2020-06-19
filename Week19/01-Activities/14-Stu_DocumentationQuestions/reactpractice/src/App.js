import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


function App() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {friends.map(element => {
        return <FriendCard {...element} />;
      })}
    </Wrapper>
  );
}

export default App;
