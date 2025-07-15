import React from "react";
import { useTrackedStore } from "./store";

export function AddButton() {
  const { addNewPlayer } = useTrackedStore();
  return (
    <button className="add_new_button" onClick={(e) => addNewPlayer()}>
      Add New Player
    </button>
  );
}

AddButton.whyDidYouRender = true;
