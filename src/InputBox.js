import React from "react";
import useStore from "./store";

const InputBox = React.memo(({ rowKey, inputType }) => {
  console.log("Render InputBox", rowKey, inputType);
  const updatePlayerField = useStore((state) => state.updatePlayerField);
  const inputValue = useStore(
    (state) => state.players.byIds[rowKey][inputType]
  );
  return (
    <input
      value={inputValue}
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
});

InputBox.whyDidYouRender = true;

export { InputBox };
