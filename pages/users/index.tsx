import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './styles/UsersPage.module.scss'
import UserList from '../../components/provider/UserListProvider'
import { useRecoilValue } from 'recoil'
import { userList } from '../../store/users/atom'
import type { UserData } from '../../store/users/types'
import UserTable from '../../components/templates/UserTable'
import { isLoginSelector, loginState } from '../../store/auth/selector'
import { useRouter } from 'next/router'
import PageHeader from '../../components/molecules/PageHeader'
import AddButton from '../../components/molecules/AddButton'

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
        <PageHeader
          title='ユーザー管理'>
          <div className={styles.UsersPage__buttons}>
            <AddButton
              onClick={() => console.log('add')} />
          </div>
        </PageHeader>
        <UserList>
          <UserTable
            users={users} />
        </UserList>
      </div>
    </>
  )
}

export default UsersPage
