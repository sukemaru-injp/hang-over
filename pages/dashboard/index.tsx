import type { NextPage } from 'next'
import styles from './styles/DashboardPage.module.scss'
import Login from '../../components/templates/Login'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'
import { logoutAction } from '../../src/auth'
import Button from '../../components/atoms/Button'

const DashboardPage: NextPage = () => {
  const { isLogin } = useRecoilValue<Auth>(authState)
  const resetAuthState = useResetRecoilState(authState)

  console.log('user', isLogin)
  const onClickLogout = async () => {
    try {
      await logoutAction()
      resetAuthState()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }
  
  const dashboardView = (login: boolean) => {
    if (login) {
      return (
        <>
          <h1>ダッシュボードビュー</h1>
          <Button
            onClick={() => onClickLogout()}>
            <span>ログアウト</span>
          </Button>
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
