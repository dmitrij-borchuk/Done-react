import axios from 'axios'
import { ITodoItem } from '../types/TodoItem'

const API_BASE = `https://api.backendless.com/${process.env.REACT_APP_BL_APP_ID}/${process.env.REACT_APP_BL_REST_KEY}`

export const getItems = () => {
  return axios.get<ITodoItem[]>(`${API_BASE}/data/items`)
}
