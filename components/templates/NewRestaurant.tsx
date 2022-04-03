import { FC, useState, FormEvent, ChangeEvent, useRef } from 'react'
import styles from './styles/NewRestaurant.module.scss'
import InputAndLabel from '../molecules/InputAndLabel'
import TextareaAndLabel from '../molecules/TextareaAndLabel'
import SelectBoxAndLabel from '../molecules/SelectBoxAndLabel'
import FileInputAndLabel from '../molecules/FileInputAndLabel'
import Button from '../atoms/Button'
import { v4 as uuidv4 } from 'uuid'
import { useSetRecoilState } from 'recoil'
import { loadingState } from '../../store/loading/atom'
import { PREFECTURE_LIST, SELECT_HOURS, DAY_OF_WEEK } from '../../src/const'
import toast, { Toaster } from 'react-hot-toast'
import { saveFoodsStorage, saveExteriorStorage } from '../../src/storage'
import { map } from 'lodash'
import { setYakitoriInfo } from '../../src/yakitori'

interface Props {}

const POSTAL_CODE_REGEX = /^\d{7}$/
const TEL_REGEX = /^0[0-9]{9,10}$/

const NewRestaurant: FC<Props> = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [name, setName] = useState('')
  const [station, setStationName] = useState('')
  const [contact, setContact] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [prefecture, setPrefecture] = useState(0)
  const [access, setAccess] = useState<string>('')
  const [overview, setOverview] = useState<string>('')
  const [foodImages, setFoodImages] = useState<FileList|null>(null)
  const [exteriorImages, setExteriorImages] = useState<FileList|null>(null)
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')
  const [lowestPrice, setLowestPrice] = useState('')
  const [highestPrice, setHighestPrice] = useState('')
  const [holiday, setHoliday] = useState<number[]>([])
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [restaurantId, setRestaurantId] = useState<string>('')
  const [foodsImageUrls, setFoodsImageUrls] = useState<string[]>([])
  const [exteriorImageUrls, setExteriorImageUrls] = useState<string[]>([])

  const setLoading = useSetRecoilState(loadingState)

  const allInputted = name && station && contact && address && prefecture && overview && startTime && endTime

  const notifyError = (message: string) => toast.error(message, {
    duration: 3000,
    position: 'top-center'
  })

  const notifySuccess = (message: string) => toast.success(message, {
    duration: 3000,
    position: 'top-center'
  })

  const resetForm = () => {
    setName('')
    setStationName('')
    setContact('')
    setPostalCode('')
    setAddress('')
    setAccess('')
    setOverview('')
    setLowestPrice('')
    setHighestPrice('')
    setHoliday([])
    setLat('')
    setLng('')
    setRestaurantId('')
    formRef.current?.reset()
    // TODO削除する
    console.log('reset', restaurantId, foodsImageUrls, exteriorImageUrls)
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = uuidv4().split('-')
    const sendId = (id[0] + id[1]) 
    if (postalCode && !POSTAL_CODE_REGEX.test(postalCode)) {
      return notifyError('郵便番号の形式が正しくありません')
    }
    if (!TEL_REGEX.test(contact)) {
      return notifyError('連絡先の形式が正しくありません')
    }
    if (Number(lowestPrice) > Number(highestPrice)) {
      return notifyError('最低価格が最高価格を超えています')
    }
    if (!foodImages?.length) {
      return notifyError('食べ物の写真が欲しい！')
    }
    if (!exteriorImages?.length) {
      return notifyError('外観の写真が欲しい！')
    }
    setLoading(true)
    try {
      const foodUrls = await saveFoodsStorage(sendId, foodImages)
      const exteriorUrls = await saveExteriorStorage(sendId, exteriorImages)
      setFoodsImageUrls(foodUrls)
      setExteriorImageUrls(exteriorUrls)
      await setYakitoriInfo({
        name,
        station,
        contact,
        postalCode,
        address,
        prefecture,
        access,
        overview,
        startTime,
        endTime,
        lowestPrice,
        highestPrice,
        holiday,
        lat,
        lng,
        restaurantId: sendId,
        foodsImageUrls: foodUrls,
        exteriorImageUrls: exteriorUrls
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      notifyError('作成に失敗しました')
    }
    setLoading(false)
    notifySuccess('焼き鳥店情報を作成しました')
    resetForm()
  }

  const onChangeFoodsFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) { return }
    setFoodImages(event.target.files)
  }

  const onChangeExteriorFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) { return }
    setExteriorImages(event.target.files)
  }

  return (
    <>
      <div className={styles.NewRestaurant}>
        <form
          ref={formRef}
          onSubmit={(e) => onSubmit(e)}>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='店名'
              isMust
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='郵便番号'
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
              label='緯度'
              placeholder='GoogleMap表示に使用'
              value={lat}
              onChange={(e) => setLat(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='経度'
              placeholder='GoogleMap表示に使用'
              value={lng}
              onChange={(e) => setLng(e.target.value)} />
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
            <InputAndLabel
              label='連絡先'
              isMust
              placeholder='09010101004'
              value={contact}
              onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <SelectBoxAndLabel
              label='定休日'
              multiple
              options={DAY_OF_WEEK}
              onChange={(e) => setHoliday(map(e.target.selectedOptions, option => Number(option.value)))} />
          </div>

          <div className={styles.NewRestaurant__content}>
            <SelectBoxAndLabel
              label='営業開始'
              isMust
              options={SELECT_HOURS}
              onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <SelectBoxAndLabel
              label='営業終了'
              isMust
              options={SELECT_HOURS}
              onChange={(e) => setEndTime(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='最低価格'
              type='number'
              value={lowestPrice}
              onChange={(e) => setLowestPrice(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <InputAndLabel
              label='最高価格'
              type='number'
              value={highestPrice}
              onChange={(e) => setHighestPrice(e.target.value)} />
          </div>
          <div className={styles.NewRestaurant__content}>
            <FileInputAndLabel
              label='食べ物写真'
              multiple
              isMust
              accept="image/*"
              onChange={(e) => onChangeFoodsFile(e)}/>
          </div>
          <div className={styles.NewRestaurant__content}>
            <FileInputAndLabel
              label='外観写真'
              multiple
              isMust
              accept="image/*"
              onChange={(e) => onChangeExteriorFile(e)}/>
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
