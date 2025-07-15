import React from "react";
import { useTrackedStore } from "./store";
import { InputBox } from "./InputBox";
const PlayerRow = React.memo(({ rowKey }) => {
  console.log("Render row", rowKey);
  // const player = useTrackedStore().players[rowKey];

  return (
    <fieldset className="fieldset_verygood">
      <legend>{rowKey}</legend>
      <div>
        <label>Name: </label>
        <InputBox rowKey={rowKey} inputType="name" />
      </div>
      <div>
        <label>Score: </label>
        <InputBox rowKey={rowKey} inputType="score" />
      </div>
    </fieldset>
  );
});

PlayerRow.whyDidYouRender = true;

export { PlayerRow };
