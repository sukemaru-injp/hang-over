import type { NextPage } from 'next'
import styles from './styles/DashboardPage.module.scss'
import DashboardMain from '../../components/templates/Dashboard/DashboardMain'

const DashboardPage: NextPage = () => {
  return (
    <>
      <div className={styles.DashboardPage}>
        <DashboardMain />
      </div>
    </>
  )
}

export default DashboardPage
