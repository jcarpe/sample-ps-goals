import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useGoalsStore = create(
  persist(
    (set, get) => ({
      goals: [],
      addAGoal: (goalData) =>
        set(state => ({ goals: [...state.goals, {
          _id: uuidv4(),
          updates: [],
          ...goalData
        }]})
      ),
      updateGoal: (goalId, updateData) => set(state => {
        const index = state.goals.findIndex(goal => goal._id === goalId);
        state.goals[index].updates.push({
          date: new Date().toISOString(),
          detail: updateData
        })
        return { goals: state.goals}
      })
    }),
    {
      name: "ps-goals-management",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useGoalsStore;
