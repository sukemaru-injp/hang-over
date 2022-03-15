import type { NextPage } from 'next'
import styles from './styles/NewRestaurant.module.scss'
import PageHeader from '../../components/molecules/PageHeader'

const NewRestaurantPage: NextPage = () => {
  return (
    <>
      <div className={styles.NewRestaurantPage}>
        <PageHeader
          title='新規登録 - 店舗' />  
      </div>
    </>
  )
}

export default NewRestaurantPage
