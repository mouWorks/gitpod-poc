import { someString } from './utils'
const words = someString()
console.log(words)

export function say() {
  return words
}