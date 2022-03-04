import { FC, ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { isLoginSelector, loginState } from '../../store/auth/selector'
import PageWrapper from '../atoms/PageWrapper'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface Props {
  children: ReactNode
}
const DefaultView: FC<Props> = (props: Props) => {
  const isLogin: loginState = useRecoilValue(isLoginSelector)

  return (
    <>
      <Header
        isLogin={isLogin} />
      <PageWrapper>
        {props.children}
      </PageWrapper>
      <Footer />
    </>
  )
}

export default DefaultView
