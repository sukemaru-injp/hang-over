import { FC, useState } from 'react'
import styles from './styles/NewRestaurant.module.scss'
import InputAndLabel from '../molecules/InputAndLabel'
import TextareaAndLabel from '../molecules/TextareaAndLabel'
import SelectBoxAndLabel from '../molecules/SelectBoxAndLabel'
import Button from '../atoms/Button'
import { v4 as uuidv4 } from 'uuid'
import { PREFECTURE_LIST } from '../../src/const'

interface Props {}

const NewRestaurant: FC<Props> = () => {
  const [name, setName] = useState('')
  const [station, setStationName] = useState('')
  const [tel, setTel] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [prefecture, setPrefecture] = useState('')
  const [overview, setOverview] = useState('')

  const allInputted = name && station && tel && postalCode && address && prefecture && overview

  const onSubmit = () => {
    const id = uuidv4()
    console.log(id.split('-'))
  }

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
            label='郵便番号'
            isMust
            placeholder='1234567'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        <div className={styles.NewRestaurant__content}>
          <SelectBoxAndLabel
            label='都道府県'
            isMust
            options={PREFECTURE_LIST}
            onChange={(e) => setPrefecture(e.target.value)} />
        </div>
        <div className={styles.NewRestaurant__content}>
          <InputAndLabel
            label='住所'
            isMust
            placeholder='港区新橋２丁目１６−１'
            value={address}
            onChange={(e) => setAddress(e.target.value)} />
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
        <div className={styles.NewRestaurant__content}>
          <TextareaAndLabel
            label='店舗概要'
            isMust
            placeholder='絶品焼き鳥のお店'
            value={overview}
            onChange={(e) => setOverview(e?.target?.value || '')
            } />
        </div>
        <div className={styles.NewRestaurant__buttonArea}>
          <Button
            disabled={!allInputted}
            onClick={() => onSubmit()}>
              作成する
          </Button>
        </div>
      </div>
    </>
  )
}

export default NewRestaurant
