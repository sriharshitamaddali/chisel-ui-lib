import React from 'react'
import styles from './Button.module.css'
import { ButtonProps } from './Button.types'
import { classNames } from '../../../utils/classNames'

const Button = ({
  variant,
  size,
  disabled = false,
  onClick,
  leftIcon,
  children,
}: ButtonProps) => {

  return (
    <button
      className={classNames(styles.button, styles[variant], styles[size])}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.inner}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        {children}
      </span>
    </button>
  )
}

export default Button