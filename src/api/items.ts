import axios from 'axios'
import { ITodoItem } from '../types/TodoItem'

const API_BASE = `https://api.backendless.com/${process.env.REACT_APP_BL_APP_ID}/${process.env.REACT_APP_BL_REST_KEY}`

export const getItems = () => {
  return axios.get<ITodoItem[]>(`${API_BASE}/data/items`)
}

export const createItem = (data: ITodoItem) => {
  return axios.post<ITodoItem>(`${API_BASE}/data/items`, data)
}
