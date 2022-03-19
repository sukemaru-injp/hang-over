import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './styles/DashboardPage.module.scss'
import Login from '../../components/templates/Login'
import { useRecoilValue } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'
import toast, { Toaster } from 'react-hot-toast'
import DashboardMain from '../../components/templates/DashboardMain'

const DashboardPage: NextPage = () => {
  const { isLogin } = useRecoilValue<Auth>(authState)

  const notify = () => toast.success('ログインしました', {
    duration: 3000,
    position: 'top-center'
  })

  useEffect(() => {
    notify()
  }, [isLogin])
  
  const dashboardView = (login: boolean) => {
    if (login) {
      return (
        <>
          <div className={styles.DashboardPage}>
            <h1>ダッシュボードビュー</h1>
            <DashboardMain />
            <Toaster />
          </div>
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
