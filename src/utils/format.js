// 将传入数字左侧补letter传入字符以达到length规定位数
export function setNumberLength (val, length = 2, letter = '0') {
  val = val.toString()
  let res = ''
  if (val.length < length) {
    for (let i = val.length + 1; i <= length; ++i) {
      res += letter
    }
  }
  return res + val
}
