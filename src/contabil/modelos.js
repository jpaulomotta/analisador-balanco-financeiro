import {createBalanco} from './balanco'

export const modeloJBS = () => {
  const balanco = createBalanco([2018, 2017])
  balanco[0].ativo.circulante = 35374.4
  balanco[0].ativo.naoCirculante = 72443.8
  balanco[0].passivo.circulante = 28009.8
  balanco[0].passivo.naoCirculante = 52805.6
  balanco[0].passivo.patrimonioLiquido = 27002.8

  balanco[1].ativo.circulante = 34595.2
  balanco[1].ativo.naoCirculante = 69595.7
  balanco[1].passivo.circulante = 31549.3
  balanco[1].passivo.naoCirculante = 48655.1
  balanco[1].passivo.patrimonioLiquido = 23986.5
  return balanco
}