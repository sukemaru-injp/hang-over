import { FC } from 'react'

interface Props {
  text: string
}
const Button: FC<Props> = (props: Props) => {
  return (
    <>
      <button>
        <span>{props.text}</span>
      </button>
    </>
  )
}
export default Button
