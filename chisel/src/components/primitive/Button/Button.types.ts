export interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary"
  size: "small" | "medium" | "large"
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: React.ReactNode
  children: React.ReactNode
}