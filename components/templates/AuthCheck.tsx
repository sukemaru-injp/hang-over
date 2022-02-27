import { FC, ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

const AuthCheck: FC<Props> = (props: Props) => {
  useEffect(() => {
    console.log('auth')
  }, [])
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthCheck
