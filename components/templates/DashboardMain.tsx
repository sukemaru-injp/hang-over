import { VFC } from 'react'
import styles from './styles/DashboardMain.module.scss'
import DashboardCard from '../organisms/DashboardCard'
import IconWrapper from '../atoms/IconWrapper'
import { FiUsers } from 'react-icons/fi'

interface Props {}
const DashboardMain: VFC<Props> = () => {
  return (
    <>
      <div className={styles.DashboardMain}>
        <div className={styles.DashboardMain__card}>
          <DashboardCard
            title="ユーザー管理">
            <IconWrapper
              color='#000'
              size='40px'>
              <FiUsers />
            </IconWrapper>
          </DashboardCard>
        </div>
      </div>
    </>
  )
}

export default DashboardMain
