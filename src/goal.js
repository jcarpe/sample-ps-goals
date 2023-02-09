import { useState } from "react";
import useGoalsStore from "./zustand-persist-store";

export default (props) => {
  const [inputState, setInputState] = useState('')
  const updateGoal = useGoalsStore(state => state.updateGoal);
  const goals = useGoalsStore(state => state.goals)

  const handleInputChange = (e) => {
    e.preventDefault()
    setInputState(e.target.value)
  }

  const handleUpdateSubmit = (e, goalId) => {
    e.preventDefault()
    updateGoal(goalId, inputState)
  }

  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>

      <ul>
        {goals.find(goal => goal._id === props.id).updates.map(update => {
          return (
            <li>
              <h3>{update.date}</h3>
              <p>{update.detail}</p>
            </li>
          )
        })}
      </ul>
      
      <form onSubmit={e => handleUpdateSubmit(e, props.id)}>
        <label>
          Add an update:
          <input type="text" value={inputState} onChange={handleInputChange}/>
        </label>
        <input type="submit"/>
      </form>
    </li>
  )
}