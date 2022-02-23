import { FC } from 'react'
import styles from './styles/Login.module.scss'

interface Props {}

const Login: FC<Props> = () => {
  return (
    <>
      <div className={styles.Login}>
        ログイン
      </div>
    </>
  )
}

export default Login
