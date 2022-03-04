import { VFC } from 'react'
import styles from './styles/Nav.module.scss'
import Link from 'next/link'
import Card from '../atoms/Card'

interface Props {}
const Nav: VFC<Props> = () => {
  return (
    <>
      <Card>
        <nav className={styles.Nav}>
          <ul>
            <li className={styles.Nav__list}>
              <button className={styles.Nav__button}>
                <Link passHref href="/">
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
