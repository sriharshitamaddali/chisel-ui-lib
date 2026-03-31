import type { Meta, StoryObj } from '@storybook/react'
import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
}

export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {
    args: {
      size: 'medium'
    }
  }

  export const SmallLoader: Story = {
    args: {
      size: 'small'
    }
  }

  export const LargeLoader: Story = {
    args: {
      size: 'large'
    }
  }