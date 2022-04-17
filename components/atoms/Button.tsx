import { FC, ComponentProps } from 'react'
import styles from './styles/Button.module.scss'

export interface ButtonProps extends ComponentProps<'button'> {
  color?: 'default'|'delete'|'edit'
} 

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonColor = (type: string) => {
    switch (type) {
    case 'default':
      return styles.ButtonAtom
    case 'delete':
      return styles.ButtonAtom__delete
    case 'edit':
      return styles.ButtonAtom__edit
    default:
      return styles.ButtonAtom  
    }
  }
  return (
    <button
      className={buttonColor(props?.color || 'default')}
      disabled={props?.disabled || false}
      type={props?.type || 'button'}
      onClick={props?.onClick}>
      {props.children}
    </button>
  )
}
export default Button
