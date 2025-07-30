import React from "react";
import useStore from "./store";

export function AddButton() {
  const addNewPlayer = useStore((state) => state.addNewPlayer);
  return (
    <button className="add_new_button" onClick={() => addNewPlayer()}>
      Add New Player
    </button>
  );
}

AddButton.whyDidYouRender = true;
