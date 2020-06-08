import React from 'react'
import { DropMenu } from './DropMenu'

export default {
  title: 'DropMenu',
  component: DropMenu,
}

const items = [<div>Item 1</div>, <div>Item 1</div>]

export const Default = () => <DropMenu content={items}>Open menu</DropMenu>
