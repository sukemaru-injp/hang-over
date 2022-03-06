import { FC, ReactNode } from 'react'
import { IconContext } from 'react-icons'

interface IconProps {
  children: ReactNode,
  size?: string,
  color?: string
}
const IconWrapper: FC<IconProps> = (props: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${props?.color || '#fff'}`, size: `${props?.size || '20px'}` }}>
      {props.children}
    </IconContext.Provider>
  )
}

export default IconWrapper
