import { FC, ChangeEvent } from 'react'

export interface FileInputProps {
  accept?: string
  multiple?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const FileInput: FC<FileInputProps> = (props: FileInputProps) => {
  return (
    <input
      type="file"
      accept={props?.accept || ''}
      multiple={props?.multiple || false}
      onChange={props.onChange} />
  )
}

export default FileInput
