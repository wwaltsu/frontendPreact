import { useState, useEffect } from 'react'
import targetService from './services/target'
import './style.css'


const Target = () => {
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [note, setNote] = useState("")

  const [targetList, setTargetList] = useState([])

  useEffect(() => {
    targetService
      .get()
      .then(initialTargets => {
        setTargetList(initialTargets)
      })
  }, [])


  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  const addTarget = (event) => {
    event.preventDefault()
    const targetObject = {
      title: title,
      startDate: startDate,
      endDate: endDate,
      note: note
    }

    targetService
      .create(targetObject)
      .then(returnedTarget => {
        targetService.get().then((updatedTargets) => {
          setTargetList(updatedTargets)
          setTitle('')
          setStartDate('')
          setEndDate('')
          setNote('')
        })
      })
  }

  const allTargets = targetList.map((t) => {
    return (
      <div key={t.id}>
        <h3>Title: {t.title}</h3>
        <p>Start Date: {t.startDate}</p>
        <p>End Date: {t.endDate}</p>
        <p>Note: {t.note}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Targets</h1>
      <form onSubmit={addTarget}>
        Title: <input value={title} onChange={handleTitleChange} placeholder="Title" />
        Start Date: <input value={startDate} onChange={handleStartDateChange} placeholder="DD-MM-YY" />
        End Date: <input value={endDate} onChange={handleEndDateChange} placeholder="DD-MM-YY" />
        Note: <input value={note} onChange={handleNoteChange} placeholder="Note" />
        <button type="submit">Save</button>
      </form>
      {allTargets}
    </div>
  )
}

export default Target





