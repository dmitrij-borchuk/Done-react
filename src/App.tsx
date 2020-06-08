import React, { useEffect, useState, useCallback } from 'react'
import { Snackbar } from '@material/react-snackbar'
import { getItems, createItem, deleteItem } from './api/items'
import { ITodoItem } from './types/TodoItem'
import { TodoList } from './components/todoList/TodoList'
import { RoundButton } from './components/roundButton/RoundButton'
import { ReactComponent as AddIcon } from './assets/add-24px.svg'
import { EditDialog } from './components/editDialog/EditDialog'
import './App.css'

function App() {
  const [items, setItems] = useState<ITodoItem[]>([])
  const [showEdit, setShowEdit] = useState(false)
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
  const onSubmit = useCallback(
    async (data: ITodoItem) => {
      const response = await createItem(data)
      setItems([...items, response.data])
      setShowEdit(false)
      setShowSuccessSnackbar(true)
    },
    [items],
  )
  const onBackClick = useCallback(() => {
    setShowEdit(false)
  }, [])
  const onDelete = useCallback(
    async (data: ITodoItem) => {
      await deleteItem(data.objectId)
      setItems(items.filter((item) => item.objectId !== data.objectId))
    },
    [items],
  )

  useEffect(() => {
    const effect = async () => {
      const response = await getItems()
      setItems(response.data)
    }
    effect()
  }, [])

  return (
    <div className="container h-screen mx-auto px-4 pt-4 text-gray-700">
      <div className="absolute bottom-0 right-0 pb-4 pr-4">
        <RoundButton
          className="text-white"
          onClick={() => setShowEdit(true)}
          data-testid="add-btn"
        >
          <AddIcon height="50%" width="50%" className="fill-current" />
        </RoundButton>
      </div>
      <TodoList list={items} onDelete={onDelete} />

      {showEdit && (
        <EditDialog
          onSubmit={onSubmit}
          onBackClick={onBackClick}
          className="absolute inset-0 bg-white container mx-auto px-4 py-4"
        />
      )}

      {showSuccessSnackbar && (
        <Snackbar
          message="Task has been saved successfully"
          actionText="dismiss"
        />
      )}
    </div>
  )
}

export default App
