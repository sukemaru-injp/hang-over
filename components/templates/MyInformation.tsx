import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import styles from './styles/MyInformation.module.scss'
import { authState } from '../../store/auth/atom'
import type { Auth } from '../../store/auth/types'

interface Props {}

const MyInformation: FC<Props> = () => {
  const info = useRecoilValue<Auth>(authState)
  return (
    <>
      <div className={styles.MyInformation}>
        ログイン中:
        &ensp;<span className={styles.MyInformation__content}>{info.name}</span>
        &ensp;<span className={styles.MyInformation__content}>{info.email}</span>
      </div>
    </>
  )
}

export default MyInformation
