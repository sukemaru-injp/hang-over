import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import DefaultView from '../components/templates/DefaultView'
import AuthProvider from '../components/provider/AuthProvider'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <DefaultView>
            <Component {...pageProps} />
          </DefaultView>
        </AuthProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
