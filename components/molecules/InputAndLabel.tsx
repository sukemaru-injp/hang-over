import { FC } from 'react'
import styles from './styles/InputAndLabel.module.scss'
import TextInput, { TextInputProps } from '../atoms/TextInput'

interface Props extends TextInputProps {
  label: string,
  isMust?: boolean
}

const InputAndLabel: FC<Props> = (props: Props) => {
  console.log(props)
  const mustLabel = (must: boolean) => {
    if (must) {
      return (
        <span className={styles.must}>*</span>
      )
    } else {
      return (<></>)
    }
  }
  return (
    <>
      <span className={styles.label}>{props.label}{mustLabel(props?.isMust || false)}</span>
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
