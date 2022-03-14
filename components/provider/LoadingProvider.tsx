import { FC, ReactNode } from 'react'
import Loading from '../atoms/Loading'
import { useRecoilValue } from 'recoil'
import { loadingState } from '../../store/loading/atom'

interface Props {
  children: ReactNode
}
const LoadingProvider: FC<Props> = (props: Props) => {
  const loading = useRecoilValue(loadingState)

  const loadingComponent = (isLoading: boolean) => {
    if(isLoading) {
      return (
        <>
          {props.children}
          <Loading />
        </>
      )
    } else {
      return (
        <>{props.children}</>
      )
    }
  }

  return (
    <>
      {loadingComponent(loading)}
    </>
  )
}

export default LoadingProvider
