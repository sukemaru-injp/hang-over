import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import DefaultHeader from '../components/templates/DefaultHeader'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <DefaultHeader />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
