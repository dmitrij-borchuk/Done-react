import React from 'react'
import { RoundButton } from './RoundButton'
import { ReactComponent as AddIcon } from '../../assets/add-24px.svg'

export default {
  title: 'RoundButton',
  component: RoundButton,
}

export const Empty = () => <RoundButton />

export const WithIcon = () => (
  <RoundButton className="text-white">
    <AddIcon height="50%" width="50%" className="fill-current" />
  </RoundButton>
)
