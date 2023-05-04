import axios from 'axios'
const baseUrl = 'http://localhost:3001/goals'



const getGoals = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createGoal = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}


export default { createGoal, getGoals }