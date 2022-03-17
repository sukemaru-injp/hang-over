import { FC } from 'react'
import styles from './styles/TextareaAndLabel.module.scss'
import Textarea, { TextareaProps } from '../atoms/Textarea'

interface Props extends TextareaProps {
  label: string,
  isMust?: boolean
}

const InputAndLabel: FC<Props> = (props: Props) => {
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
      <Textarea
        value={props.value}
        name={props?.name || ''}
        placeholder={props?.placeholder || ''}
        rows={props?.rows || 8}
        cols={props?.cols || 20}
        onChange={props.onChange} />
    </>
  )
}

export default InputAndLabel
