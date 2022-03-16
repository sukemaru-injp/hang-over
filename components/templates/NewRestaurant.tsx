import { FC, useState } from 'react'
import styles from './styles/NewRestaurant.module.scss'
import InputAndLabel from '../molecules/InputAndLabel'

interface Props {}
const NewRestaurant: FC<Props> = () => {
  const [name, setName] = useState('')
  const [station, setStationName] = useState('')
  const [tel, setTel] = useState('')

  return (
    <>
      <div className={styles.NewRestaurant}>
        <div className={styles.NewRestaurant__content}>
          <InputAndLabel
            label='名前'
            isMust
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.NewRestaurant__content}>
          <InputAndLabel
            label='最寄駅'
            isMust
            placeholder='例)新橋駅'
            value={station}
            onChange={(e) => setStationName(e.target.value)} />
        </div>
        <div className={styles.NewRestaurant__content}>
          <InputAndLabel
            label='連絡先'
            isMust
            placeholder='09010101004'
            value={tel}
            onChange={(e) => setTel(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default NewRestaurant
