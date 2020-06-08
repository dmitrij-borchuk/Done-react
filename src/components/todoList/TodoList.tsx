import React, { useCallback } from 'react'
import { ITodoItem } from '../../types/TodoItem'
import { TodoItem } from '../todoItem/TodoItem'
import { emptyFn } from '../../utils/common'

interface IProps {
  list: ITodoItem[]
  onDelete?: (item: ITodoItem) => void
}
export const TodoList: React.FC<IProps> = ({ list, onDelete = emptyFn }) => {
  const handleOnDelete = useCallback(
    (item: ITodoItem) => () => {
      onDelete(item)
    },
    [onDelete],
  )

  return (
    <div className="space-y-8" data-testid="list">
      {list.map((item) => (
        <TodoItem
          key={item.objectId}
          title={item.title}
          done={item.done}
          onDelete={handleOnDelete(item)}
        />
      ))}
    </div>
  )
}
