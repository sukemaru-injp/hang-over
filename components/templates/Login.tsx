import { FC } from 'react'
import styles from './styles/Login.module.scss'
import Button from '../atoms/Button'
import CardWithTitle from '../molecules/CardWithTitle' 

interface Props {}

const Login: FC<Props> = () => {
  // const [email, setEmail] = useState('')
  const submit = () => {
    console.log('ok')
  }

  return (
    <>
      <CardWithTitle
        title="ログイン">
        <div className={styles.Login__inner}>
          <Button
            text="ログイン"
            onClick={() => submit()} />
        </div>
      </CardWithTitle>
    </>
  )
}

export default Login
