import { VFC, useState, memo, useEffect } from 'react'
import styles from './styles/Header.module.scss'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'
import Nav from '../organisms/Nav'
import IconWrapper from '../atoms/IconWrapper'
import { useRouter } from 'next/router'
import LinkWrapper from '../atoms/LinkWrapper'

interface Props {
  isLogin: boolean
}

const DefaultHeader: VFC<Props> = (props: Props) => {
  const router = useRouter()
  const [navState, setNavState] = useState<boolean>(false)
  useEffect(() => {
    setNavState(false)
  }, [router])

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
          <LinkWrapper link="/dashboard">
            <Image
              src="/image/title-logo.png"
              width={95}
              height={55}
              alt="焼鳥ライフハック" />
          </LinkWrapper>
        </div>
        {userIcon(props.isLogin)}
        {showNav(navState)}
      </header>
    </>
  )
}

export default memo(DefaultHeader)
