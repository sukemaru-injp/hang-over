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
        <div className={styles.CardWithTitle__titleArea}>
          <h3 className={styles.CardWithTitle__title}>{props.title}</h3>
        </div>
        {props.children}
      </div>
    </>
  )
}

export default CardWithTitle
