import React from "react";
import { PlayerTable } from "./PlayerTable";
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Nested Players with react‑tracked + zustand</h2>
      <PlayerTable />
    </div>
  );
}

App.whyDidYouRender = true;
