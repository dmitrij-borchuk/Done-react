import React from 'react'
import { TextField } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
}

export const Empty = () => <TextField />
export const WithText = () => <TextField value="Some text" />
export const WithError = () => <TextField error />
export const WithHelperText = () => <TextField helperText="Some field info" />
export const WithErrorAndHelperText = () => (
  <TextField helperText="Some error info" error />
)
