import { cpSync, readdirSync } from 'fs'
import { join } from 'path'


console.log(`**** Copying public files ****
`)

const publicFiles = readdirSync('public')

for (const file of publicFiles) {
  console.log(` - ${file}`)
  cpSync(join('./public', file), join('./dist', file))
}

console.log(`
**** Copyied ${publicFiles.length} public file(s) ****`)