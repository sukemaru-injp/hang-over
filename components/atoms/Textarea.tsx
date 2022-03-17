import { FC, ChangeEvent } from 'react'
import styles from './styles/Textarea.module.scss'

interface TextareaProps {
  value: string
  name?: string
  placeholder?: string
  rows?: number
  cols?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const Textarea: FC<TextareaProps> = (props: TextareaProps) => {
  return (
    <>
      <textarea
        className={styles.Textarea}
        value={props.value}
        name={props?.name || ''}
        placeholder={props?.placeholder || ''}
        rows={props?.rows || 8}
        cols={props?.cols || 20}
        onChange={() => props?.onChange} />
    </>
  )
}

export default Textarea
