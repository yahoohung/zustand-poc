import React, { useEffect } from "react";
import { selectPlayerScore, useStore } from "./store";
import { PlayerRow } from "./PlayerRow";
import { AddButton } from "./AddButton";
import isEqual from "react-fast-compare";
import { useShallow } from "zustand/react/shallow";
export function PlayerTable() {
  const playerList = useStore(useShallow((state) => state.players.allIds));
  console.log("Rendered PlayerTable");
  // useEffect(() => {
  //   const unsubscribe = useStore.subscribe(
  //     (state) => state.players.allIds,
  //     (count) => {
  //       getState().sortPlayersByScore();
  //     },
  //     isEqual
  //   );

  //   return () => unsubscribe();
  // }, []);
  return (
    <div>
      {playerList.map((rk) => (
        <PlayerRow key={rk} rowKey={rk} />
      ))}
      <AddButton />
    </div>
  );
}

PlayerTable.whyDidYouRender = true;
