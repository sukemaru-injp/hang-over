import { VFC, useState, ChangeEvent } from 'react'
import styles from './styles/Login.module.scss'
import Button from '../atoms/Button'
import CardWithTitle from '../molecules/CardWithTitle'
import InputAndLabel from '../molecules/InputAndLabel'
import { emailValidation, pinValidation } from '../../src/validation'
import { loginAction } from '../../src/auth'
import { useSetRecoilState } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'

interface Props {}

type ErrorState = {
  email?: string,
  pin?: string
}
type EmailState = string
type PinState = string

const Login: VFC<Props> = () => {
  const setAuth = useSetRecoilState<Auth>(authState)
  const [pin, setPin] = useState<PinState>('')
  const [email, setEmail] = useState<EmailState>('')
  const [error, setError] = useState<ErrorState>({
    email: '',
    pin: ''
  })

  const submit = async () => {
    try {
      const data = await loginAction(email, pin)
      if (!data) { return }
      setAuth(val => {
        return {
          ...val,
          name: data?.name || '',
          email: data?.email || '',
          uid: data?.uid || '',
          isLogin: true }
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const onInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim())
    const message = emailValidation(event.target.value.trim()) 
    setError({ ...error, email: message })
  }

  const onInputPin = (event: ChangeEvent<HTMLInputElement>) => {
    setPin(event.target.value.trim())
    const message = pinValidation(event.target.value.trim())
    setError({ ...error, pin: message }) 
  }

  const isEmptyError: boolean = !!error.email || !!error.pin
  const allInputted: boolean = !!pin && !!email

  return (
    <>
      <div className={styles.Login}>
        <CardWithTitle
          title="ログイン">
          <div className={styles.Login__inputArea}>
            <div className={styles.Login__innerWrapper}>
              <InputAndLabel
                label='Email'
                value={email}
                onChange={(event) => onInputEmail(event)} />
              <div className={styles.Login__errorArea}>
                <p className={styles.Login__error}>{error?.email ? error.email : ''}</p>
              </div>
            </div>
            <div className={styles.Login__innerWrapper}>
              <InputAndLabel
                label='Password'
                value={pin}
                onChange={(event) => onInputPin(event)} />
              <div className={styles.Login__errorArea}>
                <p className={styles.Login__error}>{error?.pin ? error.pin : ''}</p>
              </div>
            </div>
          </div>
          <div className={styles.Login__innerWrapper}>
            <Button
              disabled={isEmptyError || !allInputted}
              onClick={() => submit()}>
              <span>ログイン</span>
            </Button>
          </div>
        </CardWithTitle>
      </div>
    </>
  )
}

export default Login
