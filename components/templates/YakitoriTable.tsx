import { VFC } from 'react'
import styles from './styles/YakitoriTable.module.scss'
import { map } from 'lodash'
import Card from '../atoms/Card'
import { YakitoriInfoType } from '../../store/yakitori/types'
import Button from '../atoms/Button'

interface Props {
  list: YakitoriInfoType[]
}
const YakitoriTable: VFC<Props> = (props: Props) => {
  const HEADER_LABELS: string[] = ['店名', '住所', '操作']
  console.log('props', props)
  const onClickDelete = (item: YakitoriInfoType) => {
    console.log('delete', item)
  }

  return (
    <Card>
      <table className={styles.YakitoriTable}>
        <thead>
          <tr>
            {map(HEADER_LABELS, (v, idx) => {
              return (
                <th key={`head${idx}`} className={styles.YakitoriTable__head}>{v}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {map(props.list, (item, idx) => {
            return (
              <tr key={`item${idx}`}>
                <td className={styles.YakitoriTable__content}>{item.name}</td>
                <td className={styles.YakitoriTable__content}>{item.address}</td>

                <td className={styles.UserTable__content}>
                  <Button
                    color='delete'
                    type='button'
                    onClick={() => onClickDelete(item)}>
                      削除
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default YakitoriTable
