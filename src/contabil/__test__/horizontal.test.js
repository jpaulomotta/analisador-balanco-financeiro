import {createBalancoTeste} from '../balanco'
import {analiseHorizontal} from '../horizontal'

test('analise horizontal', () => {
  const balanco = createBalancoTeste()
  const analise = analiseHorizontal(balanco)
  
  expect(analise.ativo.circulante.toFixed(1)).toBe('8.9')
  expect(analise.ativo.naoCirculante.toFixed(1)).toBe('5.6')
  expect(analise.passivo.circulante.toFixed(1)).toBe('12.6')
  expect(analise.passivo.naoCirculante.toFixed(1)).toBe('5.2')
  expect(analise.passivo.patrimonioLiquido.toFixed(1)).toBe('3.6')
})