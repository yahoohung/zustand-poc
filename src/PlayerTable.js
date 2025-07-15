import React from "react";
import { useTrackedStore } from "./store";
import { PlayerRow } from "./PlayerRow";
import { AddButton } from "./AddButton";
export function PlayerTable() {
  const { byPlayersId } = useTrackedStore();
  return (
    <div>
      {byPlayersId.map((rk) => (
        <PlayerRow key={rk} rowKey={rk} />
      ))}
      <AddButton />
    </div>
  );
}

PlayerTable.whyDidYouRender = true;
