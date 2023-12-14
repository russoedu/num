import { _vn } from '../helpers/_vn'
import { Calculator } from './Calculator'

export class AdvancedCalculator {
  
  /**
   * TÉCNICA 1 – PIR MIDE
   */
  piramide: {
    cd: string,
    mo: string,
    dm: string,
    eu: string,
  }
  constructor (calc: Calculator) {
    this.piramide = {
      cd: _vn.piramide(calc.cd),
      mo: _vn.piramide(calc.mo),
      dm: _vn.piramide(calc.dm),
      eu: _vn.piramide(calc.eu),
    }
  }
}