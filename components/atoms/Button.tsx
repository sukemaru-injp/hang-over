import { FC, MouseEvent } from 'react'
import styles from './styles/Button.module.scss'

interface Props {
  text: string,
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Button: FC<Props> = (props: Props) => {
  return (
    <>
      <button
        className={styles.ButtonAtom}
        onClick={() => props.onClick()}>
        <span>{props.text}</span>
      </button>
    </>
  )
}
export default Button
