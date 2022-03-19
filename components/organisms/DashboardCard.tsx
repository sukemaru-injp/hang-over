import { FC, ReactNode } from 'react'
import Card from '../atoms/Card'
import styles from './styles/DashboardCard.module.scss'

interface Props {
  title: string
  children: ReactNode
}
const DashboardCard: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <div className={styles.DashboardCard}>
          <div className={styles.DashboardCard__mainContent}>
            {props.children}
          </div>
          <div className={styles.DashboardCard__lowerContent}>
            <h2>{props.title}</h2>
          </div>
        </div>
      </Card>
    </>
  )
}

export default DashboardCard
