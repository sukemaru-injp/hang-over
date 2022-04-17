import { VFC } from 'react'
import styles from './styles/YakitoriTable.module.scss'
import { map } from 'lodash'
import Card from '../atoms/Card'
import { YakitoriInfoType } from '../../store/yakitori/types'

interface Props {
  list: YakitoriInfoType[]
}
const YakitoriTable: VFC<Props> = (props: Props) => {
  const HEADER_LABELS: string[] = ['店名', '住所', '操作']
  console.log('props', props)
  return (
    <Card>
      <table className={styles.UserTable}>
        <thead>
          <tr>
            {map(HEADER_LABELS, (v, idx) => {
              return (
                <th key={`head${idx}`} className={styles.UserTable__head}>{v}</th>
              )
            })}
          </tr>
        </thead>
      </table>
    </Card>
  )
}

export default YakitoriTable
