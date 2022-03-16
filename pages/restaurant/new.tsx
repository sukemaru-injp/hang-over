import type { NextPage } from 'next'
import styles from './styles/NewRestaurant.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import NewRestaurant from '../../components/templates/NewRestaurant'

const NewRestaurantPage: NextPage = () => {
  return (
    <>
      <div className={styles.NewRestaurantPage}>
        <PageHeader
          title='新規登録 - 店舗' />
        <NewRestaurant />
      </div>
    </>
  )
}

export default NewRestaurantPage
