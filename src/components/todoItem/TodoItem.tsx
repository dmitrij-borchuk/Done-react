import React from 'react'
import cn from 'classnames'
import { DropMenu } from '../dropMenu/DropMenu'
import { ReactComponent as MenuIcon } from '../../assets/more_vert-24px.svg'
import './styles.css'
import { emptyFn } from '../../utils/common'

interface IItemMenuProps {
  onDelete: () => void
  onEdit: () => void
}
const ItemMenu: React.FC<IItemMenuProps> = ({ onDelete, onEdit }) => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <button
        onClick={onDelete}
        className="px-3 text-2xl font-light"
        data-testid="item-delete-btn"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        className="px-3 text-2xl font-light"
        data-testid="item-edit-btn"
      >
        Edit
      </button>
    </div>
  )
}

interface ITodoItemProps {
  title: string
  done: boolean
  onDelete?: () => void
  onEdit?: () => void
  onDoneClick?: () => void
}
export const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const {
    title,
    done,
    onDelete = emptyFn,
    onEdit = emptyFn,
    onDoneClick = emptyFn,
  } = props

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          data-testid="item-done-btn"
          onClick={onDoneClick}
          className="w-8 h-8"
          checked={done}
        />
        <div
          className={cn('todoItem text-gray-700 ml-5 text-3xl', {
            'line-through': done,
          })}
          data-testid="list-item"
        >
          {title}
        </div>
      </div>

      <DropMenu content={<ItemMenu onDelete={onDelete} onEdit={onEdit} />}>
        <button className="w-10 h-10" data-testid="item-menu-btn">
          <MenuIcon height="100%" width="100%" />
        </button>
      </DropMenu>
    </div>
  )
}
