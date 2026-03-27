import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ChipInput from './ChipInput'

const meta: Meta<typeof ChipInput> = {
  title: 'Components/ChipInput',
  component: ChipInput,
}

export default meta
type Story = StoryObj<typeof ChipInput>

export const Primary: Story = {
    args: {
      label: 'Selection',
      placeholder: 'Type and select',
      value: []
    }
}

export const Prepopulated: Story = {
  render: (args) => {
    const [chips, setChips] = useState<string[]>(['Technical', 'Executive'])
    return (
      <ChipInput
        {...args}
        value={chips}
        onChange={setChips}
      />
    )
  },
  args: {
    label: 'Audience types',
    placeholder: 'Add more...',
  }
}