import {createBalancoDemo} from '../balanco'
import {analiseHorizontal} from '../horizontal'

test('analise horizontal', () => {
  const balanco = createBalancoDemo()
  const analise = analiseHorizontal(balanco)
  
  expect(analise.ativo.circulante.toFixed(2)).toBe('0.09')
  expect(analise.ativo.naoCirculante.toFixed(2)).toBe('0.06')
  expect(analise.passivo.circulante.toFixed(2)).toBe('0.13')
  expect(analise.passivo.naoCirculante.toFixed(2)).toBe('0.05')
  expect(analise.passivo.patrimonioLiquido.toFixed(2)).toBe('0.04')
})