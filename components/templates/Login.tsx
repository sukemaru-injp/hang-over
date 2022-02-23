import { FC } from 'react'
import styles from './styles/Login.module.scss'
import Button from '../atoms/Button'

interface Props {}

const Login: FC<Props> = () => {
  return (
    <>
      <div className={styles.Login}>
        ログイン
        <div className={styles.Login__buttonArea}>
          <Button
            text="ログイン" />
        </div>
      </div>
    </>
  )
}

export default Login
