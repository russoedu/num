import { vitest } from 'vitest'

console.debug = vitest.fn()
console.info = vitest.fn()
console.log = vitest.fn()
console.table = vitest.fn()
console.warn = vitest.fn()
console.error = vitest.fn()
