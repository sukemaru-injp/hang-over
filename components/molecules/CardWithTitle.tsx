import { FC, ReactNode } from 'react'
import styles from './styles/CardWithTitle.module.scss'

interface Props {
  title: string,
  children: ReactNode
}
const CardWithTitle: FC<Props> = (props: Props) => {
  return (
    <>
      <div className={styles.CardWithTitle}>
        {props.children}
      </div>
    </>
  )
}

export default CardWithTitle
