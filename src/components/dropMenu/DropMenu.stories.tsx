import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropMenu } from './DropMenu'
import { ITodoItem } from '../../types/TodoItem'

export default {
  title: 'DropMenu',
  component: DropMenu,
}

const items = [<div>Item 1</div>, <div>Item 1</div>]

export const Default = () => <DropMenu content={items}>Open menu</DropMenu>
