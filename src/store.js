import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { shallow } from "zustand/shallow";

const useStore = create(
  subscribeWithSelector(
    devtools(
      immer((set) => ({
        players: {
          byIds: {
            row1: { name: "player 1", score: 10 },
            row2: { name: "player 2", score: 20 },
            row3: { name: "player 3", score: 30 },
          },
          allIds: ["row1", "row2", "row3"],
        },

        updatePlayerField: (rowKey, field, value) =>
          set((state) => {
            state.players.byIds[rowKey][field] = value;
          }),

        addNewPlayer: () =>
          set((state) => {
            const newPlayerKey = Object.keys(state.players.byIds).length + 1;
            const randomScore = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
            state.players.byIds[`row${newPlayerKey}`] = {
              name: `player ${newPlayerKey}`,
              score: randomScore,
            };
            state.players.allIds.push(`row${newPlayerKey}`);
          }),

        removePlayer: (rowKey) =>
          set((state) => {
            delete state.players.byIds[rowKey];
            state.players.allIds = state.players.allIds.filter(
              (id) => id !== rowKey
            );
          }),

        sortPlayersByScore: () =>
          set((state) => {
            console.log("SORTED");
            state.players.allIds = Object.keys(state.players.byIds).sort(
              (a, b) =>
                state.players.byIds[a].score - state.players.byIds[b].score
            );
          }),
      }))
    )
  )
);

// Subscribe to score changes and sort players
useStore.subscribe(
  (state) => state.players.byIds,
  (prev, next) => {
    const prevScores = Object.values(prev).map((player) => player.score);
    const nextScores = Object.values(next).map((player) => player.score);

    if (!shallow(prevScores, nextScores)) {
      useStore.getState().sortPlayersByScore();
    }
  }
);

export default useStore;
