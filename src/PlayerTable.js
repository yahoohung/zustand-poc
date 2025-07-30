import React, { useEffect } from "react";
import useStore from "./store";
import { PlayerRow } from "./PlayerRow";
import { AddButton } from "./AddButton";
export function PlayerTable() {
  const playerList = useStore((state) => state.players.allIds);

  useEffect(() => {
    const unsubscribe = useStore.subscribe(
      (state) => state.players.allIds,
      (count) => {
        console.log(`Count in useEffect: ${count}`);
      }
    );

    return () => unsubscribe();
  }, []);
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
