import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getItems } from './api/items'
import { TodoItem } from './components/todoItem/TodoItem'
import { ITodoItem } from './types/TodoItem'
import { TodoList } from './components/todoList/TodoList'

function App() {
  const [items, setItems] = useState<ITodoItem[]>([])
  useEffect(() => {
    const effect = async () => {
      const response = await getItems()
      setItems(response.data)
    }
    effect()
  }, [])

  return (
    <div className="App">
      <TodoList list={items} />
    </div>
  )
}

export default App
