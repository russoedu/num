/* v8 ignore start */

import { readFileSync, writeFileSync } from 'fs'

console.log(`**** Updating Tauri Conf ****
`)

const pkg = JSON.parse(readFileSync('./package.json'))
const tauriConf = JSON.parse(readFileSync('./src-tauri/tauri.conf.json'))

const name = pkg.name
const version = pkg.version

tauriConf.productName = name
tauriConf.version = version

writeFileSync('./src-tauri/tauri.conf.json', JSON.stringify(tauriConf, null, 2))

console.log(`
**** Updated Tauri Conf ****`)

/* v8 ignore end */
