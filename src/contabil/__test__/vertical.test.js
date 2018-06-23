import { createBalancoDemo } from '../balanco'
import { analiseVertical } from '../vertical'

test('analise vertical', () => {
  const periodo = createBalancoDemo()[0]
  const analise = analiseVertical(periodo)

  expect(analise.ano).toBe(periodo.ano)
  expect(analise.ativo.circulante.toFixed(4)).toBe('0.2429')
  expect(analise.ativo.naoCirculante.toFixed(4)).toBe('0.7571')
  expect(analise.passivo.circulante.toFixed(4)).toBe('0.2844')
  expect(analise.passivo.naoCirculante.toFixed(4)).toBe('0.2259')
  expect(analise.passivo.patrimonioLiquido.toFixed(4)).toBe('0.4897')
})

