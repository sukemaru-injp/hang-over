import type { NextPage } from 'next'
import styles from './styles/NewRestaurant.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import NewRestaurant from '../../components/templates/NewRestaurant'
import { useRecoilValue } from 'recoil'
import { Auth } from '../../store/auth/types'
import { authState } from '../../store/auth/atom'

const NewRestaurantPage: NextPage = () => {
  const auth = useRecoilValue<Auth>(authState)
  return (
    <>
      <div className={styles.NewRestaurantPage}>
        <PageHeader
          title='新規登録 - 店舗' />
        <NewRestaurant
          userId={auth.uid} />
      </div>
    </>
  )
}

export default NewRestaurantPage
