import { VFC } from 'react'
import styles from './styles/SelectBoxAndLabel.module.scss'
import SelectBox, { SelectBoxProps } from '../atoms/Selectbox'

interface Props extends SelectBoxProps {
  label: string,
  isMust?: boolean
}
const SelectBoxAndLabel: VFC<Props> = (props: Props) => {
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
      <SelectBox
        options={props.options}
        name={props?.name || ''}
        disabled={props?.disabled || false}
        onChange={props.onChange} />
    </>
  )
}

export default SelectBoxAndLabel
