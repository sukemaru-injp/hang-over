import { VFC } from 'react'
import styles from './styles/UserTable.module.scss'
import type { UserData } from '../../store/users/types'
import { map } from 'lodash'
import Card from '../atoms/Card'
import IconWrapper from '../atoms/IconWrapper'
import { BsFillPersonXFill, BsPersonCheck } from 'react-icons/bs'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authState } from '../../store/auth/atom'
import { loadingState } from '../../store/loading/atom'
import { updateUserInfo } from '../../src/auth'

interface Props {
  users: UserData[]
}
const UserTable: VFC<Props> = (props: Props) => {
  const { manage_flag } = useRecoilValue(authState)
  const setLoading = useSetRecoilState(loadingState)

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
  const _clickIcon = async (user: UserData) => {
    setLoading(true)
    if (user?.manage_flag) {
      try {
        await updateUserInfo(user.uid, {
          ...user,
          manage_flag: false
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }  
    } else {
      try {
        await updateUserInfo(user.uid, {
          ...user,
          manage_flag: true
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }  
    }
    setLoading(false)
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
                      onClick={() => _clickIcon(user)}>
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
