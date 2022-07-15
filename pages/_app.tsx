import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import DefaultView from '../components/templates/DefaultView'
import AuthProvider from '../components/provider/AuthProvider'
import LoadingProvider from '../components/provider/LoadingProvider'
import DefaultHead from '../components/atoms/DefaultHead'

import { reduxStore } from '../store/redux'
import { Provider } from 'react-redux'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultHead />
      <RecoilRoot>
        <AuthProvider>
          <LoadingProvider>
            <Provider store={reduxStore}>
              <DefaultView>
                <Component {...pageProps} />
              </DefaultView>
            </Provider>
          </LoadingProvider>
        </AuthProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
