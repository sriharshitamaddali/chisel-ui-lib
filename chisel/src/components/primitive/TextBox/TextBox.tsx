import React from 'react'
import styles from './TextBox.module.css'
import { TextBoxProps } from './TextBox.types'
import { classNames } from '../../../utils/classNames'

const TextBox = ({
  size,
  label,
  disabled = false,
  onChange,
  value,
  placeholder,
  helperText,
  errorText,
  showCharacterCount = false,
  maxLength,
  readOnly = false
}: TextBoxProps) => {

  return (
    <div className={classNames(styles.textBox)}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          className={classNames(styles[size], styles.input, errorText && styles.error, readOnly && styles.readonly)}
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
        />
          {showCharacterCount && maxLength && (
            <span className={styles.characterCount}>{`${value?.length || 0}/${maxLength}`}</span>
          )}
      </div>
      {helperText && !errorText && <span className={styles.helperText}>{helperText}</span>}
      {errorText && <span className={styles.errorText}>{errorText}</span>}
    </div>
  )
}

export default TextBox