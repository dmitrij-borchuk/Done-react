import React from 'react'
import cn from 'classnames'
import { DropMenu } from '../dropMenu/DropMenu'
import { ReactComponent as MenuIcon } from '../../assets/more_vert-24px.svg'
import './styles.css'
import { emptyFn } from '../../utils/common'

interface IItemMenuProps {
  onDelete: () => void
}
const ItemMenu: React.FC<IItemMenuProps> = ({ onDelete }) => {
  return (
    <>
      <button
        onClick={onDelete}
        className="px-3 text-xl font-light"
        data-testid="item-delete-btn"
      >
        Delete
      </button>
    </>
  )
}

interface ITodoItemProps {
  title: string
  done: boolean
  onDelete?: () => void
}
export const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { title, done, onDelete = emptyFn } = props

  return (
    <div className="flex justify-between">
      <div
        className={cn('todoItem', 'text-gray-700', { 'line-through': done })}
        data-testid="list-item"
      >
        {title}
      </div>

      <DropMenu content={<ItemMenu onDelete={onDelete} />}>
        <button data-testid="item-menu-btn">
          <MenuIcon />
        </button>
      </DropMenu>
    </div>
  )
}
