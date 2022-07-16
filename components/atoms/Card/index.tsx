import { FC, ReactNode } from 'react'
import styles from './Card.module.scss'

interface Props {
  children: ReactNode
}
const Card: FC<Props> = (props: Props) => {
  return (
    <>
      <div className={styles.Card}>
        {props.children}
      </div>
    </>
  )
}

export default Card
