import React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />)
  })
})