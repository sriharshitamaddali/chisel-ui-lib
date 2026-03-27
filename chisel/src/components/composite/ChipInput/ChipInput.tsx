import React, { useState } from 'react'
import styles from './ChipInput.module.css'
import { ChipInputProps } from './ChipInput.types'
import Chip from '../../primitive/Chip'

const ChipInput = ({
  value,
  label,
  placeholder,
  helperText,
  errorText,
  onChange
}: ChipInputProps) => {
  const [activeInput, setActiveInput] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' && activeInput.trim()) {
      onChange([...value, activeInput.trim()])
      setActiveInput('')
    }

    if(event.key === 'Backspace' && activeInput === '' && value.length > 0) {
      onChange(value.slice(0, -1))
    }
  }

  const handleRemove = (removedLabel: string ) => {
    onChange(value.filter(element => element != removedLabel))
  }

  return (
    <div className={styles.chipInput}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {value && value.length > 0 && value.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            size="small"
            variant="default"
            onRemove={handleRemove}
          />
        ))}
        <input
          className={styles.input}
          value={activeInput}
          onChange={(e) => setActiveInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ''}
        />
      </div>
      {helperText && !errorText && (
        <span className={styles.helperText}>{helperText}</span>
      )}
      {errorText && (
        <span className={styles.errorText}>{errorText}</span>
      )}
    </div>
  )
}

export default ChipInput