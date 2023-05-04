import { useState, useEffect } from 'react'
import goalService from './services/goals'

function Goal() {
  const [goals, setGoal] = useState("")
  const [deadline, setDeadline] = useState("")
  const [notes, setNotes] = useState("")

  const [goalList, setGoalList] = useState([])

  useEffect(() => {
    goalService.getGoals().then((initialGoals) => {
      setGoalList(initialGoals)
    })
  }, [])

  const addGoal = (event) => {
    event.preventDefault()
    const goalObject = {
      goals: goals,
      deadline: deadline,
      notes: notes,
    }

    goalService.createGoal(goalObject).then((returnedGoal) => {
      setGoalList((prevGoals) => [...prevGoals, returnedGoal])
      setGoal("")
      setDeadline("")
      setNotes("")
      goalService.getGoals().then((updatedGoals) => {
        setGoalList(updatedGoals)
      })
    })
  }

  const allGoals = goalList.map((g) => {
    return (
      <div key={g.id}>
        <h3>Goal: {g.goals}</h3>
        <p>Deadline: {g.deadline}</p>
        <p>Note: {g.notes}</p>
      </div>
    )
  })

  const handleGoalChange = (event) => {
    setGoal(event.target.value)
  }

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value)
  }

  const handleNotesChange = (event) => {
    setNotes(event.target.value)
  }

  console.log(goalList)

  return (
    <div>
      <h1>Goals</h1>
      <form onSubmit={addGoal}>
        Goal: <input value={goals} onChange={handleGoalChange} />
        Deadline: <input value={deadline} onChange={handleDeadlineChange} />
        Note: <input value={notes} onChange={handleNotesChange} />
        <button type="submit">save</button>
      </form>
      {allGoals}
    </div>
  )
}

export default Goal