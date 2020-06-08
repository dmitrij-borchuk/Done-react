import React, { useCallback } from 'react'
import { ITodoItem } from '../../types/TodoItem'
import { TodoItem } from '../todoItem/TodoItem'
import { emptyFn } from '../../utils/common'

interface IProps {
  list: ITodoItem[]
  onDelete?: (item: ITodoItem) => void
  onEdit?: (item: ITodoItem) => void
}
export const TodoList: React.FC<IProps> = ({
  list,
  onDelete = emptyFn,
  onEdit = emptyFn,
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

  return (
    <div className="space-y-8" data-testid="list">
      {list.map((item) => (
        <TodoItem
          key={item.objectId}
          title={item.title}
          done={item.done}
          onDelete={handleDelete(item)}
          onEdit={handleEdit(item)}
        />
      ))}
    </div>
  )
}
