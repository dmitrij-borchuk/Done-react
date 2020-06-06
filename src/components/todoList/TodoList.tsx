import React from 'react'
import { ITodoItem } from '../../types/TodoItem'
import { TodoItem } from '../todoItem/TodoItem'

interface IProps {
  list: ITodoItem[]
}
export const TodoList: React.FC<IProps> = ({ list }) => {
  return (
    <div className="space-y-8" data-testid="list">
      {list.map((item) => (
        <div>
          <TodoItem key={item.objectId} title={item.title} done={item.done} />
        </div>
      ))}
    </div>
  )
}
