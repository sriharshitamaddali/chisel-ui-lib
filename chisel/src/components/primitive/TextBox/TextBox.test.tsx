import React from 'react'
import { render, screen } from '@testing-library/react'
import TextBox from './TextBox'

describe('TextBox', () => {
  it('renders without crashing', () => {
    render(<TextBox />)
  })
})