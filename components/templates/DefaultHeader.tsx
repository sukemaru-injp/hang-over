import { VFC } from 'react'
import styles from './styles/DefaultHeader.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}
const DefaultHeader: VFC<Props> = () => {
  return (
    <>
      <header className={styles.Header}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/image/title-logo.png"
              width={95}
              height={55}
              alt="焼鳥ライフハック" />
          </a>
        </Link>
      </header>
    </>
  )
}

export default DefaultHeader
