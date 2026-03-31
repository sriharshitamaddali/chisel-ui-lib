import React from 'react'
import styles from './ThemeToggle.module.css'
import { ThemeToggleProps } from './ThemeToggle.types'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

const ThemeToggle = ({
  theme,
  onToggle
}: ThemeToggleProps) => {

  return (
    <div className={styles.track} onClick={onToggle}>
      <div className={`${styles.knob} ${theme === 'light' ? styles.on : ''}`}>
        {theme === 'light' && <SunIcon />}
        {theme === 'dark' && <MoonIcon />}
      </div>
    </div>
  )
}

export default ThemeToggle