import { VFC } from 'react'
import styles from './styles/Nav.module.scss'
import Link from 'next/link'

interface Props {}
const Nav: VFC<Props> = () => {
  return (
    <>
      <nav>
        <ul>
          <li className={styles.Nav__list}>
            <Link passHref href="/">
              <a>ユーザー管理</a>
            </Link>
          </li>
          <li className={styles.Nav__list}>
            <p>ログアウト</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
