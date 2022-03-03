import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import DefaultHeader from '../components/organisms/DefaultHeader'
import AuthCheck from '../components/templates/AuthCheck'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <AuthCheck>
          <DefaultHeader />
          <Component {...pageProps} />
        </AuthCheck>
      </RecoilRoot>
    </>
  )
}

export default MyApp
