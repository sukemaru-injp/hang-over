import { VFC } from 'react'
import styles from './styles/UserTable.module.scss'
import type { UserData } from '../../store/users/types'
import { map } from 'lodash'
import Card from '../atoms/Card'

interface Props {
  users: UserData[]
}
const UserTable: VFC<Props> = (props: Props) => {
  const headerLabel: string[] = ['名前', 'Email', '操作']
  return (
    <>
      <Card>
        <table className={styles.UserTable}>
          <thead>
            <tr>
              {map(headerLabel, (v, idx) => {
                return (
                  <th key={`head${idx}`} className={styles.UserTable__head}>{v}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {map(props.users, (user, idx) => {
              return (
                <tr key={`user${idx}`}>
                  <td className={styles.UserTable__content}>{user.name}</td>
                  <td className={styles.UserTable__content}>{user.email}</td>
                  <td className={styles.UserTable__content}>ボタン</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </>
  )
}

export default UserTable
