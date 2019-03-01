function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function setLength (val, length = 2, letter = '0') {
  val = val.toString()
  let res = ''
  if (val.length < length) {
    for (let i = val.length + 1; i <= length; ++i) {
      res += '0'
    }
  }
  return res + val
}

export default {
  formatNumber,
  formatTime,
  D: console.log,
  setLength
}
