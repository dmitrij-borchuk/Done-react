import React from 'react'
import { action } from '@storybook/addon-actions'
import { EditDialog } from './EditDialog'
import { ITodoItem } from '../../types/TodoItem'

export default {
  title: 'EditDialog',
  component: EditDialog,
}

const actions = {
  onSubmit: action('onSubmit'),
  onBackClick: action('onBackClick'),
}

export const Add = () => <EditDialog className="h-screen" {...actions} />

const item: ITodoItem = {
  done: false,
  title: 'Some title',
  objectId: 'Some id',
}
export const Edit = () => (
  <EditDialog item={item} className="h-screen" {...actions} />
)
