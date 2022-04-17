import { FC, ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { isLoginSelector, loginState } from '../../store/auth/selector'
import MainWrapper from '../atoms/MainWrapper'
// import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import dynamic from 'next/dynamic'
interface Props {
  children: ReactNode
}
const DefaultView: FC<Props> = (props: Props) => {
  const Header = dynamic(() => import('../organisms/Header'), { ssr: false })
  const isLogin: loginState = useRecoilValue(isLoginSelector)

  return (
    <>
      <Header
        isLogin={isLogin} />
      <MainWrapper>
        {props.children}
      </MainWrapper>
      <Footer />
    </>
  )
}

export default DefaultView
