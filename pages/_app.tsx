import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from '../components/templates/Layout'
import LoadingProvider from '../components/provider/LoadingProvider'
import DefaultHead from '../components/atoms/DefaultHead'

import { reduxStore } from '../store/redux'
import { Provider } from 'react-redux'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultHead />
      <RecoilRoot>
        <LoadingProvider>
          <Provider store={reduxStore}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </LoadingProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
