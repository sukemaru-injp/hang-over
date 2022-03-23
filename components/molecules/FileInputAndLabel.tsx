import { FC } from 'react'
import styles from './styles/FileInputAndLabel.module.scss'
import FileInput, { FileInputProps } from '../atoms/FileInput'

interface Props extends FileInputProps {
  label: string,
  isMust?: boolean
}

const FileInputAndLabel: FC<Props> = (props: Props) => {
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
      <FileInput
        accept={props?.accept || ''}
        multiple={props?.multiple || false}  
        onChange={props?.onChange} />
    </>
  )
}

export default FileInputAndLabel
