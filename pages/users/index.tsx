import type { NextPage } from 'next'
import UserList from '../../components/templates/UserList'
import { useRecoilValue } from 'recoil'
import { userList } from '../../store/users/atom'
import type { UserData } from '../../store/users/types'

const UsersPage: NextPage = () => {
  const users: UserData[] = useRecoilValue(userList)
  console.log(users)
  return (
    <>
      <UserList>
        <p>users</p>
      </UserList>
    </>
  )
}

export default UsersPage
