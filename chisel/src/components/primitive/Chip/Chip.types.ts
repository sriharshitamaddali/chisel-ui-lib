export interface ChipProps {
  size: "small" | "medium"
  variant?: "default" | "outlined"
  onRemove?: (label: string) => void
  label: string
}