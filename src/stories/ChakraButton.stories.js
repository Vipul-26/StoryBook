import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Chakra/Button', // path in menu
  component: Button,
  argTypes: { onClick: { action: 'clicked' } } // this will be applied to all stories (Success, Danger)
}

const Template =  args => <Button {...args} />

export const Success = Template.bind({}) // Story 1
Success.args = {
  variantColor: 'green',
  children: 'Success'
}

export const Danger = Template.bind({}) // Story 2
Danger.args = {
  variantColor: 'red',
  children: 'Danger'
}

