import type { Meta, StoryObj } from '@storybook/react'
import TextBox from './TextBox'

const meta: Meta<typeof TextBox> = {
  title: 'Components/TextBox',
  component: TextBox,
}

export default meta
type Story = StoryObj<typeof TextBox>

export const Default: Story = {
    args: {
      size: 'small',
      placeholder: 'Enter text...'
    }
  }
  
  export const WithLabel: Story = {
    args: {
      size: 'small',
      label: 'Email address',
      placeholder: 'you@example.com',
      helperText: "We'll never share your email"
    }
  }
  
  export const WithError: Story = {
    args: {
      size: 'small',
      label: 'Email address',
      value: 'invalid@',
      errorText: 'Please enter a valid email'
    }
  }
  
  export const WithCharacterCount: Story = {
    args: {
      size: 'small',
      label: 'Bio',
      placeholder: 'Tell us about yourself',
      showCharacterCount: true,
      maxLength: 30
    }
  }
  
  export const ReadOnly: Story = {
    args: {
      size: 'small',
      label: 'Username',
      value: 'harshita_m',
      readOnly: true
    }
  }
  
  export const Disabled: Story = {
    args: {
      size: 'small',
      placeholder: 'Disabled input',
      disabled: true
    }
  }