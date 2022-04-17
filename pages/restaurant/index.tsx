import type { NextPage } from 'next'
import styles from './styles/RestaurantPage.module.scss'
import PageHeader from '../../components/molecules/PageHeader'
import LinkWrapper from '../../components/atoms/LinkWrapper'
import AddButton from '../../components/molecules/AddButton'
import YakitoriProvider from '../../components/provider/YakitoriProvider'
import { yakitoriList } from '../../store/yakitori/atom'
import { useRecoilValue } from 'recoil'
import YakitoriTable from '../../components/templates/YakitoriTable'

const RestaurantPage: NextPage = () => {
  const list = useRecoilValue(yakitoriList)

  return (
    <>
      <YakitoriProvider>
        <div className={styles.RestaurantPage}>
          <PageHeader
            title='店舗管理'>
            <LinkWrapper link='/restaurant/new'>
              <AddButton
                onClick={() => {}} />
            </LinkWrapper>
          </PageHeader>
          <YakitoriTable
            list={list} />
        </div>
      </YakitoriProvider>
    </>
  )
}

export default RestaurantPage
