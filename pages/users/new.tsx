import type { NextPage } from 'next'
import styles from './styles/NewUserPage.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import NewUser from '../../components/templates/NewUser'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../../store/auth/atom'
import type { Auth } from '../../store/auth/types'

const NewUserPage: NextPage = () => {
  const { isLogin } = useRecoilValue<Auth>(authState)

  useEffect(() => {

  }, [])
  return (
    <>
      <div className={styles.NewUserPage}>
        <PageHeader
          title='新規登録 - ユーザー' />
        <NewUser />
      </div>
    </>
  )
}

export default NewUserPage
