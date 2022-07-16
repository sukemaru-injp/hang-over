import { FC, ChangeEvent } from 'react'
import styles from './TextInput.module.scss'

export interface TextInputProps {
  disabled?: boolean
  value: string
  placeholder?: string
  type?: string
  name?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <>
      <input
        className={styles.Input}
        value={props.value}
        name={props?.name || ''}
        type={props?.type || 'text'}
        placeholder={props?.placeholder || ''}
        disabled={props?.disabled || false}
        onChange={props?.onChange} />
    </>
  )
}

export default TextInput
