import { FC, ReactNode } from 'react'
import styles from './styles/CardWithTitle.module.scss'
import Card from '../atoms/Card'

interface Props {
  title: string,
  children: ReactNode
}
const CardWithTitle: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <div className={styles.CardWithTitle}>
          <div className={styles.CardWithTitle__titleArea}>
            <h3 className={styles.CardWithTitle__title}>{props.title}</h3>
          </div>
          {props.children}
        </div>
      </Card>
    </>
  )
}

export default CardWithTitle
