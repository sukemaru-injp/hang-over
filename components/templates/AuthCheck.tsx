import { FC, ReactNode, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authState, Auth } from '../../store/auth/atom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../libs/Firebase'
import { getUserInfoByFireStore } from '../../src/auth'

interface Props {
  children: ReactNode
}

const AuthCheck: FC<Props> = (props: Props) => {
  const { isLogin }: Auth = useRecoilValue(authState)
  useEffect(() => {
    if (isLogin) { return }
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid } = user
        try {
          await getUserInfoByFireStore(uid)
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e)
        }
      }
      // eslint-disable-next-line no-console
      console.log('auth', user)
    })
  }, [])
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthCheck
