import React from "react";
import { useStore } from "./store";

export function RemoveButton({ rowKey }) {
  const removePlayer = useStore((state) => state.removePlayer);
  return (
    <button className="remove_button" onClick={() => removePlayer(rowKey)}>
      Remove This Player
    </button>
  );
}

RemoveButton.whyDidYouRender = true;
