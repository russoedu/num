class OnTauri {
  #onTauri: boolean
  constructor () {
    this.#onTauri = !!(window as any).__TAURI_INTERNALS__
  }

  get check () {
    return this.#onTauri
  }
}

const inst = new OnTauri()
const _onTauri = inst.check

export { _onTauri }
