import { VFC, useState, useEffect } from 'react'
import styles from './styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'

interface Props {
  isLogin: boolean
}

const DefaultHeader: VFC<Props> = (props: Props) => {
  const [navState, setNavState] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('effect', navState)
  }, [navState])

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
      </header>
    </>
  )
}

export default DefaultHeader
