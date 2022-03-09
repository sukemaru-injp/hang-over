import { VFC, useState, memo } from 'react'
import styles from './styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import Nav from '../organisms/Nav'
import IconWrapper from '../atoms/IconWrapper'

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
          <IconWrapper
            color='#FFFFA6'
            size='30px'>
            <div className={styles.Header__iconWrapper}>
              <FaUserCircle />
            </div>
          </IconWrapper>
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
          <Nav onClick={() => setNavState(false)}/>
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
