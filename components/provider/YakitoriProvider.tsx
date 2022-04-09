import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const YakitoriProvider: FC<Props> = ({ children }: Props) => {
  
  return (
    <>
      {children}
    </>
  )
}

export default YakitoriProvider
