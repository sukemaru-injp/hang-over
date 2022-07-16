import { FC, ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  link: string,
  children: ReactNode|String
}
const LinkWrapper: FC<Props> = (props: Props) => {
  return (
    <>
      <Link href={props.link} passHref>
        <a>
          {props.children}
        </a>
      </Link>
    </>
  )
}

export default LinkWrapper
