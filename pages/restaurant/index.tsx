import type { NextPage } from 'next'
import styles from './styles/RestaurantPage.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import LinkWrapper from '../../components/atoms/LinkWrapper'
import AddButton from '../../components/molecules/AddButton'

const RestaurantPage: NextPage = () => {
  return (
    <>
      <div className={styles.RestaurantPage}>
        <PageHeader
          title='店舗管理'>
          <LinkWrapper link='/'>
            <AddButton
              onClick={() => {}} />
          </LinkWrapper>
        </PageHeader>
      </div>
    </>
  )
}

export default RestaurantPage
