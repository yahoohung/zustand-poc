import React from "react";
import { useTrackedStore } from "./store";

export function AddButton() {
  const addNewPlayer = useTrackedStore().addNewPlayer;
  return (
    <button className="add_new_button" onClick={() => addNewPlayer()}>
      Add New Player
    </button>
  );
}

AddButton.whyDidYouRender = true;
