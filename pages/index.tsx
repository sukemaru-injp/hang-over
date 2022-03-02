import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>Test!!</h1>
      <Link passHref href="/dashboard">
        <a style={{ color: '#3256a8' }}>To Dashboard</a>
      </Link>
    </>
  )
}

export default Home
