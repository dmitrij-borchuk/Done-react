import React from 'react'
import { TodoList } from './TodoList'

export default {
  title: 'TodoList',
  component: TodoList,
}

const items = [
  { title: 'ToDo 1', done: false, objectId: 'id1' },
  { title: 'ToDo 2', done: true, objectId: 'id2' },
]

export const Empty = () => <TodoList list={[]} />

export const WithItems = () => <TodoList list={items} />
