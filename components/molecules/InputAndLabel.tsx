import { FC } from 'react'
import styles from './styles/InputAndLabel.module.scss'
import TextInput, { TextInputProps } from '../atoms/TextInput'

interface Props extends TextInputProps {
  label: string
}

const InputAndLabel: FC<Props> = (props: Props) => {
  return (
    <>
      <span className={styles.label}>{props.label}</span>
      <TextInput
        value={props.value}
        type={props?.type || 'text'}
        placeholder={props?.placeholder || ''}
        disabled={props?.disabled || false}
        onChange={props?.onChange} />
    </>
  )
}

export default InputAndLabel
