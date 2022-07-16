import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = (props: Props) => {

  return (
    <>
      <Header />
      <main className={styles.Layout}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
