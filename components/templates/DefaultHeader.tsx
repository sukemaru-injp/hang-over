import { VFC } from 'react'
import styles from './styles/DefaultHeader.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'

interface Props {}
const DefaultHeader: VFC<Props> = () => {
  const { isLogin }: Auth = useRecoilValue(authState)

  const onClickIcon = () => {
    // eslint-disable-next-line no-console
    console.log('onClick')
  }

  const userIcon = (login: boolean) => {
    if (!login) {
      return (
        <div
          className={styles.Header__inner}
          onClick={() => onClickIcon()}>
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
        {userIcon(isLogin)}
      </header>
    </>
  )
}

export default DefaultHeader
