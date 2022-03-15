import { VFC } from 'react'
import styles from './styles/UserTable.module.scss'
import type { UserData } from '../../store/users/types'
import { map } from 'lodash'
import Card from '../atoms/Card'
import IconWrapper from '../atoms/IconWrapper'
import { BsFillPersonXFill, BsPersonCheck } from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import { authState } from '../../store/auth/atom'

interface Props {
  users: UserData[]
}
const UserTable: VFC<Props> = (props: Props) => {
  const { manage_flag } = useRecoilValue(authState)
  const headerLabel: string[] = ['名前', 'Email', '管理フラグ', '操作']

  const manageIcon = (flag: boolean) => {
    if (flag) {
      return (
        <IconWrapper color='#000'>
          <BsPersonCheck />
        </IconWrapper>
      )  
    } else {
      return (
        <IconWrapper color='#000'>
          <BsFillPersonXFill />
        </IconWrapper>  
      )
    }
  }
  const _clickIcon = () => {
    console.log('change-status')
  }

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
                  <td className={styles.UserTable__content}>
                    <button
                      className={styles.UserTable__iconWrapper}
                      disabled={!manage_flag}
                      onClick={() => _clickIcon()}>
                      {manageIcon(user?.manage_flag || false)}
                    </button>
                  </td>
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
