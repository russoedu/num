import { _vn } from '../helpers/_vn'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  map: NumericMap
  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  piramide: {
    title: string,
    results: {
        number: number,
        description: string,
      }[]
  }[]

  /*
   *   cd: string,
   *   mo: string,
   *   dm: string,
   *   eu: string,
   * }
   */
  constructor (map: NumericMap) {
    this.map = map
    this.piramide = [
      {
        title:   'CD',
        results: _vn.piramide(map.cd),
      },
      {
        title:   'MO',
        results: _vn.piramide(map.mo),
      },
      {
        title:   'DM',
        results: _vn.piramide(map.dm),
      },
      {
        title:   'EU',
        results: _vn.piramide(map.eu),
      },
    ]
  }
}