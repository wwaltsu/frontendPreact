const url = "http://localhost:3001/events"
import axios from "axios"


const getEvents = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const createEvent = newObject => {
    const request = axios.post("http://localhost:3001/createEvents", newObject)
    return request.then(response => response.data)
}



const deleteEvent = (id) => {
    Axios.delete(`${url}/${id}`).then((response) => {
        setEventList(
            EventList.filter((val) => {
                return val.id != id
            })
        )
    })
}

export default { createEvent, getEvents, deleteEvent }