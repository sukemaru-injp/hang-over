import { FC } from 'react'
import styles from './styles/Login.module.scss'
import Button from '../atoms/Button'

interface Props {}

const Login: FC<Props> = () => {
  // const [email, setEmail] = useState('')
  const submit = () => {
    console.log('ok')
  }

  return (
    <>
      <div className={styles.Login}>
        ログイン
        <div className={styles.Login__buttonArea}>
          <Button
            text="ログイン"
            onClick={() => submit()} />
        </div>
      </div>
    </>
  )
}

export default Login
