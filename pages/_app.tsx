import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import DefaultView from '../components/templates/DefaultView'
import AuthProvider from '../components/provider/AuthProvider'
import LoadingProvider from '../components/provider/LoadingProvider'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <LoadingProvider>
            <DefaultView>
              <Component {...pageProps} />
            </DefaultView>
          </LoadingProvider>
        </AuthProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
