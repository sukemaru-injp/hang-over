import { FC, ComponentProps } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends ComponentProps<'button'> {} 

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={styles.ButtonAtom}
      disabled={props?.disabled || false}
      type={props?.type || 'button'}
      onClick={props?.onClick}>
      {props.children}
    </button>
  )
}
export default Button
