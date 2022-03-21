import { VFC, useState, ChangeEvent, FormEvent } from 'react'
import styles from './styles/Login.module.scss'
import Button from '../atoms/Button'
import CardWithTitle from '../molecules/CardWithTitle'
import InputAndLabel from '../molecules/InputAndLabel'
import { emailValidation, pinValidation } from '../../src/validation'
import { useSetRecoilState } from 'recoil'
import { authState } from '../../store/auth/atom'
import type { Auth } from '../../store/auth/types'
import { createAccountAction } from '../../src/auth'

interface Props {}

type ErrorState = {
  email?: string,
  pin?: string
}
type EmailState = string
type PinState = string
type NameState = string

const NewUser: VFC<Props> = () => {
  const setAuth = useSetRecoilState<Auth>(authState)
  const [pin, setPin] = useState<PinState>('')
  const [email, setEmail] = useState<EmailState>('')
  const [name, setName] = useState<NameState>('')
  const [error, setError] = useState<ErrorState>({
    email: '',
    pin: ''
  })

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await createAccountAction(email, pin, name)
      if (!data) { return }
      setAuth(val => {
        return {
          ...val,
          name: data?.name || '',
          email: data?.email || '',
          uid: data?.uid || '',
          manage_flag: data?.manage_flag || false,
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
  const allInputted: boolean = !!pin && !!email && !!name

  return (
    <>
      <div className={styles.Login}>
        <CardWithTitle
          title="新規作成">
          <form onSubmit={(e) => submit(e)}>
            <div className={styles.Login__inputArea}>
              <div className={styles.Login__innerWrapper}>
                <InputAndLabel
                  label='名前'
                  value={name}
                  isMust
                  onChange={(event) => setName(event.target.value)} />
              </div>
              <div className={styles.Login__innerWrapper}>
                <InputAndLabel
                  label='Email'
                  value={email}
                  isMust
                  onChange={(event) => onInputEmail(event)} />
                <div className={styles.Login__errorArea}>
                  <p className={styles.Login__error}>{error?.email ? error.email : ''}</p>
                </div>
              </div>
              <div className={styles.Login__innerWrapper}>
                <InputAndLabel
                  label='Password'
                  value={pin}
                  isMust
                  onChange={(event) => onInputPin(event)} />
                <div className={styles.Login__errorArea}>
                  <p className={styles.Login__error}>{error?.pin ? error.pin : ''}</p>
                </div>
              </div>
            </div>
            <div className={styles.Login__buttonWrapper}>
              <Button
                disabled={isEmptyError || !allInputted}
                type='submit'
                onClick={() => {}}>
                <span>登録</span>
              </Button>
            </div>
          </form>
        </CardWithTitle>
      </div>
    </>
  )
}

export default NewUser
