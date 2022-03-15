import { FC, ReactNode } from 'react'
import styles from './styles/PageHeader.module.scss'

interface Props {
  title: string,
  children?: ReactNode
}
const PageHeader: FC<Props> = (props: Props) => {
  return (
    <>
      <div className={styles.PageHeader}>
        <h2 className={styles.PageHeader__title}>{props.title}</h2>
        {props?.children || <></>}
      </div>
    </>
  )
}

export default PageHeader
