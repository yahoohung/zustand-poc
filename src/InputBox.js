import React, { useCallback } from "react";
import { useStore } from "./store";
import { useShallow } from "zustand/react/shallow";

const InputBox = React.memo(function InputBox({ rowKey, inputType }) {
  console.log("Render InputBox", rowKey, inputType);
  const updatePlayerField = useCallback(() => {
    useStore((state) => state.updatePlayerField);
  }, []);
  const inputValue = useStore(
    useShallow((state) => state.players.byIds[rowKey][inputType])
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
InputBox.name = "InputBox";

export { InputBox };
