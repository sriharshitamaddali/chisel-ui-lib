export interface ChipInputProps {
  value: string[]
  onChange: (chips: string[]) => void
  label?: string,
  placeholder?: string,
  helperText?: string,
  errorText?: string
}