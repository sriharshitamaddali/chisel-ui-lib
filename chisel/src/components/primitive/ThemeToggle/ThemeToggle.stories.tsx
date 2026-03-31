import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ThemeToggle from './ThemeToggle'
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    )
  }
}