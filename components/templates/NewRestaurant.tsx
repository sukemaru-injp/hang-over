import { FC, useState, FormEvent, ChangeEvent } from 'react'
import styles from './styles/NewRestaurant.module.scss'
import InputAndLabel from '../molecules/InputAndLabel'
import TextareaAndLabel from '../molecules/TextareaAndLabel'
import SelectBoxAndLabel from '../molecules/SelectBoxAndLabel'
import FileInputAndLabel from '../molecules/FileInputAndLabel'
import Button from '../atoms/Button'
import { v4 as uuidv4 } from 'uuid'
import { useSetRecoilState } from 'recoil'
import { loadingState } from '../../store/loading/atom'
import { PREFECTURE_LIST } from '../../src/const'
import toast, { Toaster } from 'react-hot-toast'
import { saveTestStorage } from '../../src/storage'

interface Props {}

const POSTAL_CODE_REGEX = /^\d{7}$/
const TEL_REGEX = /^0[0-9]{9,10}$/

const NewRestaurant: FC<Props> = () => {
  const [name, setName] = useState('')
  const [station, setStationName] = useState('')
  const [tel, setTel] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [prefecture, setPrefecture] = useState(0)
  const [access, setAccess] = useState<string>('')
  const [overview, setOverview] = useState<string>('')
  const [foodImages, setFoodImages] = useState<FileList|null>(null)

  const setLoading = useSetRecoilState(loadingState)

  const allInputted = name && station && tel && postalCode && address && prefecture && overview

  const notifyError = (message: string) => toast.error(message, {
    duration: 3000,
    position: 'top-center'
  })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = uuidv4().split('-')
    const restaurantId = id[0] + id[1] 
    if (!POSTAL_CODE_REGEX.test(postalCode)) {
      return notifyError('郵便番号の形式が正しくありません')
    }
    if (!TEL_REGEX.test(tel)) {
      return notifyError('連絡先の形式が正しくありません')
    }
    if (!foodImages?.length) {
      return notifyError('食べ物の写真が欲しい！')
    }
    setLoading(true)
    try {
      await saveTestStorage(restaurantId, foodImages)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
    setLoading(false)
  }

  const onChangeFoodsFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) { return }
    setFoodImages(event.target.files)
  }

  return (
    <>
      <div className={styles.NewRestaurant}>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='店名'
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
              onChange={(e) => setPrefecture(Number(e.target.value))} />
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
            <TextareaAndLabel
              label='アクセス情報'
              placeholder='新橋駅から徒歩10分'
              value={access}
              onChange={(e) => setAccess(e?.target?.value || '')} />
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
              onChange={(e) => setOverview(e?.target?.value || '')} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <FileInputAndLabel
              label='食べ物写真'
              multiple
              isMust
              accept="image/*"
              onChange={(e) => onChangeFoodsFile(e)}/>
          </div>
          <div className={styles.NewRestaurant__buttonArea}>
            <Button
              disabled={!allInputted}
              type="submit"
              onClick={() => {}}>
              作成する
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  )
}

export default NewRestaurant
