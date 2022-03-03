import { FC, ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { isLoginSelector, loginState } from '../../store/auth/selector'
import PageWrapper from '../atoms/PageWrapper'
import Header from '../organisms/Header'

interface Props {
  children: ReactNode
}
const DefaultView: FC<Props> = (props: Props) => {
  const isLogin: loginState = useRecoilValue(isLoginSelector)

  return (
    <>
      <PageWrapper>
        <Header
          isLogin={isLogin} />
        {props.children}
      </PageWrapper>
    </>
  )
}

export default DefaultView
