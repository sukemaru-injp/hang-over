import { ReactNode, VFC } from 'react'
import styles from './styles/DashboardMain.module.scss'
import DashboardCard from '../organisms/DashboardCard'
import IconWrapper from '../atoms/IconWrapper'
import { map } from 'lodash' 
import { FiUsers } from 'react-icons/fi'
import { GiChicken, GiNewBorn } from 'react-icons/gi'
import LinkWrapper from '../atoms/LinkWrapper'

interface Props {}

interface ViewData {
  title: string
  icon: ReactNode
  link: string
}
const DashboardMain: VFC<Props> = () => {
  const VIEWS: ViewData[] = [
    {
      title: 'ユーザー管理',
      icon: <FiUsers />,
      link: '/users'
    },
    {
      title: '店舗管理',
      icon: <GiChicken />,
      link: '/restaurant'
    },
    {
      title: '店舗-新規追加',
      icon: <GiNewBorn />,
      link: '/restaurant/new'
    }
  ]
  return (
    <>
      <div className={styles.DashboardMain}>
        {map(VIEWS, (v, idx) => {
          return (
            <div
              key={`card-${idx}`}
              className={styles.DashboardMain__card}>
              <LinkWrapper
                link={v?.link}>
                <DashboardCard
                  title={v.title}>
                  <IconWrapper
                    color='#000'
                    size='40px'>
                    {v.icon}
                  </IconWrapper>
                </DashboardCard>
              </LinkWrapper>
            </div>  
          )
        })}
      </div>
    </>
  )
}

export default DashboardMain
