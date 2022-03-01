const emailRegex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

export const emailValidation = (email: string): string => {
  if (!email) return 'メールアドレスを入力してください'
  if (!emailRegex.test(email)) return '正しい形式でメールアドレスを入力してください'
  return ''
}

export const pinValidation = (password: string): string => {
  if (!password) return 'パスワードを入力してください'
  if (password.length < 6) return 'パスワードは6文字以上で入力してください'
  return ''
}

export const lengthValidation = (val: string, name: string, len: number) => {
  if (!val) return `${name}を入力してください`
  return val.length > len ? '' : `${name}は${len}文字以上で入力してください`
}
