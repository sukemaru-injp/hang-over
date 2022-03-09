import { VFC, MouseEvent } from 'react'
import styles from './styles/Nav.module.scss'
import Link from 'next/link'
import Card from '../atoms/Card'
import IconWrapper from '../atoms/IconWrapper'
import { RiCloseLine } from 'react-icons/ri'

interface Props {
    // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Nav: VFC<Props> = (props: Props) => {
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
                <Link passHref href="/users">
                  <a>ユーザー管理</a>
                </Link>
              </button>
            </li>
            <li className={styles.Nav__list}>
              <button className={styles.Nav__button}>
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
