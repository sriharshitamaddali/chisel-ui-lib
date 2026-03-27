import React from 'react'
import { render, screen } from '@testing-library/react'
import ChipInput from './ChipInput'

describe('ChipInput', () => {
  it('renders without crashing', () => {
    render(<ChipInput />)
  })
})