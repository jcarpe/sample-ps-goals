import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useGoalsStore = create(
  persist(
    (set, get) => ({
      goals: {},
      addAGoal: (goalData) =>
        set((state) => {
          console.log(state);

          return {
            goals: {
              ...state.goals,
              [uuidv4()]: goalData
            }
          };
        })
    }),
    {
      name: "ps-goals-management",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useGoalsStore;
