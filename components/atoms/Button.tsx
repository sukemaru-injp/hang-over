import { FC, MouseEvent, ReactNode } from 'react'
import styles from './styles/Button.module.scss'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  type?: 'button'|'submit'|'reset'
  color?: 'default'|'delete'
  // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonColor = (type: string) => {
    switch (type) {
    case 'default':
      return styles.ButtonAtom
    case 'delete':
      return styles.ButtonAtom__delete
    default:
      return styles.ButtonAtom  
    }
  }
  return (
    <button
      className={buttonColor(props?.color || 'default')}
      disabled={props?.disabled || false}
      type={props?.type || 'button'}
      onClick={() => props.onClick()}>
      {props.children}
    </button>
  )
}
export default Button
