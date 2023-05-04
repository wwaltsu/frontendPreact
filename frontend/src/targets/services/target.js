const url = "http://localhost:3001/target"
import axios from "axios"


const get = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post("http://localhost:3001/target", newObject)
    return request.then(response => response.data)
}

export default { create, get }