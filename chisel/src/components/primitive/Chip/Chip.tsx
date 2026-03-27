import React from 'react'
import styles from './Chip.module.css'
import { ChipProps } from './Chip.types'
import { classNames } from '../../../utils/classNames'

const Chip = ({
  size,
  variant = "default",
  onRemove,
  label
}: ChipProps) => {
  return (
    <span className={classNames(styles.chip, styles[size], styles[variant])}>
      {label}
      {onRemove && (
        <button className={styles.removeButton} onClick={() => onRemove(label)}>
          X
        </button>
      )}
    </span>
  )
}

export default Chip