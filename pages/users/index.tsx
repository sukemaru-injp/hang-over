import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './styles/UsersPage.module.scss'
import UserList from '../../components/hooks/UserList'
import { useRecoilValue } from 'recoil'
import { userList } from '../../store/users/atom'
import type { UserData } from '../../store/users/types'
import UserTable from '../../components/templates/UserTable'
import { isLoginSelector, loginState } from '../../store/auth/selector'
import { useRouter } from 'next/router'

const UsersPage: NextPage = () => {
  const users: UserData[] = useRecoilValue(userList)
  const isLogin: loginState = useRecoilValue(isLoginSelector)
  const router = useRouter()
  useEffect(() => {
    if (!isLogin) { router.replace('/dashboard')}
  }, [])
  return (
    <>
      <div className={styles.UsersPage}>
        <h2 className={styles.UsersPage__title}>ユーザー管理</h2>
        <UserList>
          <UserTable
            users={users} />
        </UserList>
      </div>
    </>
  )
}

export default UsersPage
