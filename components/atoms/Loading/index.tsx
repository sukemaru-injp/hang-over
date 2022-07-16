import { VFC } from 'react'
import styles from './Loading.module.scss'

interface Props {}
const Loading: VFC<Props> = () => {
  return (
    <>
      <div className={styles.Loading}>
        <div className={styles.Loading__dot} />
        <div className={styles.Loading__dot} />
        <div className={styles.Loading__dot} />
      </div>
    </>
  )
}

export default Loading
