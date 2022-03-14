import { FC, MouseEvent } from 'react'
import styles from './styles/AddButton.module.scss'
import Button from '../atoms/Button'
import { BiPlus } from 'react-icons/bi'
import IconWrapper from '../atoms/IconWrapper'

interface Props {
  disabled?: boolean
  label?: string
  // eslint-disable-next-line no-unused-vars
  onClick: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const AddButton: FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        disabled={props?.disabled || false}
        onClick={() => props.onClick()}>
        <IconWrapper size='20px'>
          <BiPlus /><span className={styles.label}>{props?.label || '新規登録'}</span>
        </IconWrapper>
      </Button>
    </>
  )
}

export default AddButton
