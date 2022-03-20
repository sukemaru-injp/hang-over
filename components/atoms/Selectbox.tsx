import { FC, ChangeEvent } from 'react'
import { map } from 'lodash'
import styles from './styles/SelectBox.module.scss'
import { SelectItems } from '../../src/const'
import IconWrapper from './IconWrapper'
import { RiArrowDropDownLine } from 'react-icons/ri'

export interface SelectBoxProps {
  options: SelectItems[]
  disabled?: boolean
  name?: string
    // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox: FC<SelectBoxProps> = (props: SelectBoxProps) => {
  return (
    <div className={styles.SelectBox}>
      <select
        className={styles.SelectBox__select}
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
      <span className={styles.SelectBox__icon}>
        <IconWrapper
          color='#bbb'>
          <RiArrowDropDownLine />
        </IconWrapper>
      </span>
    </div>  
  )
}

export default SelectBox
