export const getPrefix = (): string => {
  if (process.env.NODE_ENV === 'development') { return 'dev_' }
  return ''
}

export const fetcher = async (url: string): Promise<any> => await fetch(url).then(res => res.json())

export const sleep = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)) }
