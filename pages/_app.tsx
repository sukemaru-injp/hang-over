import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import DefaultView from '../components/templates/DefaultView'
import AuthCheck from '../components/templates/AuthCheck'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <AuthCheck>
          <DefaultView>
            <Component {...pageProps} />
          </DefaultView>
        </AuthCheck>
      </RecoilRoot>
    </>
  )
}

export default MyApp
