import React from 'react'
import cn from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { ITodoItem } from '../../types/TodoItem'
import { TextField } from '../textField/TextField'
import { RoundButton } from '../roundButton/RoundButton'
import { ReactComponent as AddIcon } from '../../assets/add-24px.svg'
import { ReactComponent as DoneIcon } from '../../assets/done-24px.svg'
import { ReactComponent as BackIcon } from '../../assets/keyboard_backspace-24px.svg'

const emptyFn = () => {}

interface IProps {
  item?: ITodoItem
  className?: string
  onSubmit?: (data: ITodoItem) => void
  onBackClick?: () => void
}
export const EditDialog: React.FC<IProps> = (props) => {
  const {
    item,
    className = '',
    onSubmit = emptyFn,
    onBackClick = emptyFn,
  } = props
  const { handleSubmit, errors, control } = useForm<ITodoItem>({
    defaultValues: item,
  })
  const isNew = !item

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex justify-between flex-col', className)}
      data-testid="item-edit-dialog"
    >
      <div>
        <button type="button" onClick={onBackClick} data-testid="back-btn">
          <BackIcon height="32px" width="32px" className="fill-current" />
        </button>
        {/* Header */}
        <p className="text-5xl" data-testid="edit-dialog-title">
          {isNew ? 'Add new task' : 'Edit task'}
        </p>

        {/* Tile */}
        <div className="text-2xl mt-8">Title</div>

        {/* Tile field */}
        <Controller
          name="title"
          rules={{
            required: 'Please enter the title',
          }}
          control={control}
          as={TextField}
          className="mt-4"
          fullWidth
          error={!!errors.title}
          helperText={errors.title?.message}
          data-testid="edit-dialog-title-field"
        />
      </div>

      {isNew && (
        <RoundButton
          className="text-white mx-auto"
          data-testid="edit-dialog-add-btn"
        >
          <AddIcon height="50%" width="50%" className="fill-current" />
        </RoundButton>
      )}

      {!isNew && (
        <RoundButton
          className="text-white mx-auto"
          data-testid="edit-dialog-edit-btn"
        >
          <DoneIcon height="50%" width="50%" className="fill-current" />
        </RoundButton>
      )}
    </form>
  )
}
