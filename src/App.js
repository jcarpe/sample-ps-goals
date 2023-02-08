import { useState } from "react";
import useGoalsStore from "./zustand-persist-store";
import "./styles.css";

export default function App() {
  const addGoal = useGoalsStore((state) => state.addAGoal);
  const [formState, setFormState] = useState({
    description: "",
    detail: ""
  });

  const descChangeHandler = (e) =>
    setFormState({ ...formState, description: e.target.value });
  const detailChangeHandler = (e) =>
    setFormState({ ...formState, detail: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    addGoal(formState);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          A short goal description:
          <input
            type="text"
            value={formState.description}
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
