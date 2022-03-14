import type { NextPage } from 'next'
import styles from './styles/DashboardPage.module.scss'
import Login from '../../components/templates/Login'
import { useRecoilValue } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'

const DashboardPage: NextPage = () => {
  const { isLogin } = useRecoilValue<Auth>(authState)
  
  const dashboardView = (login: boolean) => {
    if (login) {
      return (
        <>
          <h1>ダッシュボードビュー</h1>
        </>
      )
    } else {
      return (
        <div className={styles.DashboardPage}>
          <Login />
        </div>
      )
    }
  }
  return (
    <>{dashboardView(isLogin)}</>
  )
}

export default DashboardPage
