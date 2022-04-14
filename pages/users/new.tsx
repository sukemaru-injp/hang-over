import type { NextPage } from 'next'
import styles from './styles/NewUserPage.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import NewUser from '../../components/templates/NewUser'

const NewUserPage: NextPage = () => {
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
