import { FC, MouseEvent, ReactNode } from 'react'
import styles from './styles/Button.module.scss'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  type?: 'button'|'submit'|'reset'
  // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <>
      <button
        className={styles.ButtonAtom}
        disabled={props?.disabled || false}
        type={props?.type || 'button'}
        onClick={() => props.onClick()}>
        {props.children}
      </button>
    </>
  )
}
export default Button
