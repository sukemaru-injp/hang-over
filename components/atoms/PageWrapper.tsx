import { FC, ReactNode } from 'react'
import styles from './styles/PageWrapper.module.scss'

interface Props {
  children: ReactNode
}
const PageWrapper: FC<Props> = (props: Props) => {
  return (
    <div className={styles.PageWrapper}>
      {props.children}
    </div>
  )
}

export default PageWrapper
