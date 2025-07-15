import React from "react";
import { useTrackedStore } from "./store";

const InputBox = ({ rowKey, inputType }) => {
  console.log("Render InputBox", rowKey, inputType);
  const updatePlayerField = useTrackedStore().updatePlayerField;
  const player = useTrackedStore().players[rowKey];
  return (
    <input
      value={player[inputType]}
      onChange={(e) =>
        updatePlayerField(
          rowKey,
          inputType,
          inputType === "score"
            ? parseInt(e.target.value, 10) || 0
            : e.target.value
        )
      }
    />
  );
};

InputBox.whyDidYouRender = true;

export { InputBox };
