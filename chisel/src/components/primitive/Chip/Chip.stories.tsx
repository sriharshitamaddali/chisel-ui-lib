import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
    args: {
        variant: 'default',
        label: 'Default Chip',
        size: 'medium'
    }
}

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        label: 'Default Chip',
        size: 'small'
    }
}