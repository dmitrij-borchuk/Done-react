import React, { useCallback } from 'react'
import { ITodoItem } from '../../types/TodoItem'
import { TodoItem } from '../todoItem/TodoItem'
import { emptyFn } from '../../utils/common'

interface IProps {
  list: ITodoItem[]
  onDelete?: (item: ITodoItem) => void
  onEdit?: (item: ITodoItem) => void
  onDoneClick?: (item: ITodoItem) => void
}
export const TodoList: React.FC<IProps> = ({
  list,
  onDelete = emptyFn,
  onEdit = emptyFn,
  onDoneClick = emptyFn,
}) => {
  const handleDelete = useCallback(
    (item: ITodoItem) => () => {
      onDelete(item)
    },
    [onDelete],
  )
  const handleEdit = useCallback(
    (item: ITodoItem) => () => {
      onEdit(item)
    },
    [onEdit],
  )
  const handleDone = useCallback(
    (item: ITodoItem) => () => {
      onDoneClick(item)
    },
    [onDoneClick],
  )

  return (
    <div className="space-y-8" data-testid="list">
      {list.map((item) => (
        <TodoItem
          key={item.objectId}
          title={item.title}
          done={item.done}
          onDelete={handleDelete(item)}
          onEdit={handleEdit(item)}
          onDoneClick={handleDone(item)}
        />
      ))}
    </div>
  )
}
