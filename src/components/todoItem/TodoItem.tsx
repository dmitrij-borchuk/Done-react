import React from 'react'
import cn from 'classnames'
import './styles.css'

interface ITodoItemProps {
  title: string
  done: boolean
}
export const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { title, done } = props

  return (
    <div
      className={cn('todoItem', 'text-gray-700', { 'line-through': done })}
      data-testid="list-item"
    >
      {title}
    </div>
  )
}
