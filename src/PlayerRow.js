import React from "react";
import { InputBox } from "./InputBox";
import { RemoveButton } from "./RemoveButton";
const PlayerRow = React.memo(function PlayerRow({ rowKey }) {
  console.log("Render row", rowKey);

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
      <div>
        <RemoveButton rowKey={rowKey} />
      </div>
    </fieldset>
  );
});

PlayerRow.whyDidYouRender = true;

export { PlayerRow };
