import type { NextPage } from 'next'
import styles from './styles/NewUserPage.module.scss'
import PageHeader from '../../components/molecules/PageHeader'

const NewUserPage: NextPage = () => {
  return (
    <>
      <div className={styles.NewUserPage}>
        <PageHeader
          title='新規ユーザー作成' />
      </div>
    </>
  )
}

export default NewUserPage
