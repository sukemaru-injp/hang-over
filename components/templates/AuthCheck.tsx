import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const AuthCheck: FC<Props> = (props: Props) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default AuthCheck
