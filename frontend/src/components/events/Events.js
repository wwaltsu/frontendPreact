import { useState, useEffect } from 'react'
import eventService from './services/event'
import './style.css'


const Events = () => {
  const [events, setEvent] = useState("")

  const [eventList, setEventList] = useState([])

  useEffect(() => {
    eventService
      .getEvents()
      .then(initialEvents => {
        setEventList(initialEvents)
      })
  }, [])


  const handleEventChange = (event) => {
    setEvent(event.target.value)
  }

  console.log(eventList)
  const addEvent = (event) => {
    event.preventDefault()
    const eventObject = {
      events: events,
    }

    eventService
      .createEvent(eventObject)
      .then(returnedEvent => {
        setEventList(eventList.concat(returnedEvent))
        setEvent('')
      })
  }

  const allEvents = eventList.map((e) => {
    return (
      <div key={e.id}>
        <h3>Event: {e.events}</h3>
      </div>
    )
  })

  return (
    <div>
      <h1>Events</h1>
      <form onSubmit={addEvent}>
        Event: <input value={events} onChange={handleEventChange} />
        <button type="submit">save</button>
      </form>
      {allEvents}
    </div>
  )
}

export default Events
