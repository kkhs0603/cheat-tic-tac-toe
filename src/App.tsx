import { useEffect, useState } from "react";
import "./App.scss";
import GameBoard from "./components/GameBoard";
import { Header } from "./components/Header";
import { useData } from "./hooks/useData";

function App() {
  const props = useData();
  return (
    <div className={`${props.isDark ? "_dark" : ""}`}>
      <Header {...props} />
      <GameBoard {...props} />
    </div>
  );
}

export default App;
