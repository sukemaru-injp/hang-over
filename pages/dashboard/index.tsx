import type { NextPage } from 'next'
import styles from './styles/DashboardPage.module.scss'
import Login from '../../components/templates/Login'

const DashboardPage: NextPage = () => {
  return (
    <>
      <div className={styles.DashboardPage}>
        <Login />
      </div>
    </>
  )
}

export default DashboardPage
