export interface TextBoxProps {
  size: "small" | "large"
  label?: string
  disabled?: boolean
  value?: string
  placeholder?: string
  helperText?: string
  errorText?: string
  showCharacterCount?: boolean
  maxLength?: number
  readOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}