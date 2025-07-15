import React from "react";
import { useTrackedStore } from "./store";

const PlayerRow = React.memo(({ rowKey }) => {
  console.log("Render row", rowKey);
  const { players, updatePlayerField } = useTrackedStore();

  return (
    <fieldset className="fieldset_verygood">
      <legend>{rowKey}</legend>
      <div>
        <label>Name: </label>
        <input
          value={players[rowKey].name}
          onChange={(e) => updatePlayerField(rowKey, "name", e.target.value)}
        />
      </div>
      <div>
        <label>Score: </label>
        <input
          type="number"
          value={players[rowKey].score}
          onChange={(e) =>
            updatePlayerField(
              rowKey,
              "score",
              parseInt(e.target.value, 10) || 0
            )
          }
        />
      </div>
    </fieldset>
  );
});

PlayerRow.whyDidYouRender = true;

export { PlayerRow };
