import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { createTrackedSelector } from "react-tracked";

const useTrackedStore = createTrackedSelector(
  create(
    devtools(
      immer((set) => ({
        players: {
          row1: { name: "player 1", score: 10 },
          row2: { name: "player 2", score: 20 },
          row3: { name: "player 3", score: 30 },
        },

        byPlayersId: ["row1", "row2", "row3"],

        updatePlayerField: (rowKey, field, value) =>
          set((state) => {
            state.players[rowKey][field] = value;
          }),

        addNewPlayer: () =>
          set((state) => {
            const newPlayerKey = Object.keys(state.players).length + 1;
            state.players[`row${newPlayerKey}`] = {
              name: `player ${newPlayerKey}`,
              score: 10 + newPlayerKey,
            };
            state.byPlayersId.push(`row${newPlayerKey}`);
          }),
      }))
    )
  )
);

export { useTrackedStore };
