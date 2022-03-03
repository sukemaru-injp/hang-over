import { VFC } from 'react'
import styles from './styles/Footer.module.scss'

interface Props {}
const Footer: VFC<Props> = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__label}>&copy; 2022 - sukemaru</p>
    </footer>
  )
}

export default Footer
