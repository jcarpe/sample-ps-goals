import { useState } from "react";
import useGoalsStore from "./zustand-persist-store";
import "./styles.css";
import Goal from "./goal";

export default function App() {
  const addGoal = useGoalsStore(state => state.addAGoal);
  const goals = useGoalsStore(state => state.goals)
  const [formState, setFormState] = useState({
    title: "",
    detail: "",
  });

  const descChangeHandler = (e) =>
    setFormState({ ...formState, title: e.target.value });
  
  const detailChangeHandler = (e) =>
    setFormState({ ...formState, detail: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(formState);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          A short goal title:
          <input
            type="text"
            value={formState.title}
            onChange={descChangeHandler}
          />
        </label>
        <label>
          More detail:
          <input
            type="text"
            value={formState.detail}
            onChange={detailChangeHandler}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>

      <ul>
        {goals.map(goal => {
          return <Goal
            title={goal.title}
            detail={goal.detail}
            id={goal._id}
            key={goal._id}
          />
        })}
      </ul>
    </div>
  );
}
