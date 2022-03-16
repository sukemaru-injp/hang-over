import { VFC, MouseEvent } from 'react'
import styles from './styles/Nav.module.scss'
import Card from '../atoms/Card'
import IconWrapper from '../atoms/IconWrapper'
import { RiCloseLine } from 'react-icons/ri'
import LinkWrapper from '../atoms/LinkWrapper'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { authState }from '../../store/auth/atom'
import { loadingState } from '../../store/loading/atom'
import { logoutAction } from '../../src/auth'
import { useRouter } from 'next/router'

interface Props {
    // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Nav: VFC<Props> = (props: Props) => {
  const resetAuthState = useResetRecoilState(authState)
  const setLoading = useSetRecoilState(loadingState)
  const router = useRouter()

  const onClickLogout = async () => {
    setLoading(true)
    try {
      await logoutAction()
      resetAuthState()
      router.replace('/dashboard')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <div
          className={styles.Nav__icon}
          onClick={() => props.onClick()}>
          <IconWrapper color='#000'><RiCloseLine /> </IconWrapper>
        </div>
        <nav className={styles.Nav}>
          <ul>
            <li className={styles.Nav__list}>
              <button className={styles.Nav__button}>
                <LinkWrapper link='/dashboard'>
                  トップページ
                </LinkWrapper>
              </button>
            </li>
            <li className={styles.Nav__list}>
              <button className={styles.Nav__button}>
                <LinkWrapper link='/restaurant'>
                  店舗管理
                </LinkWrapper>
              </button>
            </li>
            <li className={styles.Nav__list}>
              <button className={styles.Nav__button}>
                <LinkWrapper link='/users'>
                  ユーザー管理
                </LinkWrapper>
              </button>
            </li>
            <li className={styles.Nav__list}>
              <button
                className={styles.Nav__button}
                onClick={() => onClickLogout()}>
                ログアウト
              </button>
            </li>
          </ul>
        </nav>
      </Card>
    </>
  )
}

export default Nav
