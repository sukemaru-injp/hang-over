import { VFC } from 'react'
import Head from 'next/head'

interface Props {
  title?: string 
}
const DefaultHead: VFC<Props> = (props: Props) => {
  return (
    <Head>
      <title>{props?.title ? props.title : '焼鳥ライフハック|管理画面'}</title>
      <link rel="icon" href="/favicon-test.png" />
    </Head>
  )
}

export default DefaultHead
