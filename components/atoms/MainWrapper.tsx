import { FC, ReactNode } from 'react'
import styles from './styles/PageWrapper.module.scss'

interface Props {
  children: ReactNode
}
const PageWrapper: FC<Props> = (props: Props) => {
  return (
    <main className={styles.PageWrapper}>
      {props.children}
    </main>
  )
}

export default PageWrapper
