import { FC, ChangeEvent } from 'react'
import { map } from 'lodash'
import styles from './styles/SelectBox.module.scss'
import { SelectItems } from '../../src/const'

export interface SelectBoxProps {
  options: SelectItems[]
  disabled?: boolean
  name?: string
    // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox: FC<SelectBoxProps> = (props: SelectBoxProps) => {
  return (
    <select
      className={styles.SelectBox}
      name={props?.name || ''}
      disabled={props?.disabled || false}
      onChange={props.onChange}>
      {map(props.options, (v, idx) => {
        return (
          <option
            key={`option${idx}`}
            value={v.value}>
            {v.label}
          </option>
        )
      })}
    </select>
  )
}

export default SelectBox
