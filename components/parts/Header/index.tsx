import { VFC, memo } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import LinkWrapper from '../../atoms/LinkWrapper'

interface Props {}

const DefaultHeader: VFC<Props> = () => {
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
      </header>
    </>
  )
}

export default memo(DefaultHeader)
