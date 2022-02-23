import { FC } from 'react'
import styles from './styles/Button.module.scss'

interface Props {
  text: string
}
const Button: FC<Props> = (props: Props) => {
  return (
    <>
      <button className={styles.ButtonAtom}>
        <span>{props.text}</span>
      </button>
    </>
  )
}
export default Button
