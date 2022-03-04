import { VFC, useState, memo } from 'react'
import styles from './styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Nav from '../organisms/Nav'

interface Props {
  isLogin: boolean
}

const DefaultHeader: VFC<Props> = (props: Props) => {
  const [navState, setNavState] = useState<boolean>(false)
  const userIcon = (login: boolean) => {
    if (login) {
      return (
        <div
          className={styles.Header__inner}
          onClick={() => setNavState(!navState)}>
          <IconContext.Provider value={{ color: '#FFFFA6', size: '30px' }}>
            <div className={styles.Header__iconWrapper}>
              <FaUserCircle />
            </div>
          </IconContext.Provider>
        </div>
      )
    } else {
      return (
        <></>
      )
    }
  }

  const showNav = (isShow: boolean) => {
    if (isShow) {
      return (
        <div className={styles.Header__navArea}>
          <Nav />
        </div>
      )
    } else {
      return (<></>)
    }
  }
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Header__inner}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/image/title-logo.png"
                width={95}
                height={55}
                alt="焼鳥ライフハック" />
            </a>
          </Link>
        </div>
        {userIcon(props.isLogin)}
        {showNav(navState)}
      </header>
    </>
  )
}

export default memo(DefaultHeader)
