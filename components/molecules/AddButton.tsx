import { FC, MouseEvent } from 'react'
import styles from './styles/AddButton.module.scss'
import Button from '../atoms/Button'
import { IconContext } from 'react-icons'
import { BiPlus } from 'react-icons/bi'

interface Props {
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const AddButton: FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        disabled={props?.disabled || false}
        onClick={() => props.onClick()}>
        <IconContext.Provider value={{ size: '20px' }}>
          <BiPlus /><span className={styles.label}>新規登録</span>
        </IconContext.Provider>
      </Button>
    </>
  )
}

export default AddButton
