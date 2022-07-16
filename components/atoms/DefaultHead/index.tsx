import { VFC } from 'react'
import Head from 'next/head'

interface Props {
  title?: string 
}
const DefaultHead: VFC<Props> = (props: Props) => {
  return (
    <Head>
      <title>{props?.title ? props.title : 'HangOver'}</title>
      <link rel="icon" href="/favicon-test.png" />
    </Head>
  )
}

export default DefaultHead
