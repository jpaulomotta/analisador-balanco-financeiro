import { createBalancoTeste } from '../balanco'
import { analiseVertical, analiseVerticalBalanco, dadosGraficoVertical } from '../vertical'

test('analise vertical', () => {
  const periodo = createBalancoTeste()[0]
  const analise = analiseVertical(periodo)

  expect(analise.ano).toBe(periodo.ano)
  expect(analise.ativo.circulante.toFixed(4)).toBe('0.2429')
  expect(analise.ativo.naoCirculante.toFixed(4)).toBe('0.7571')
  expect(analise.passivo.circulante.toFixed(4)).toBe('0.2844')
  expect(analise.passivo.naoCirculante.toFixed(4)).toBe('0.2259')
  expect(analise.passivo.patrimonioLiquido.toFixed(4)).toBe('0.4897')
})

test('analise vertical do balanco', () => {
  const balanco = createBalancoTeste()
  const analises = analiseVerticalBalanco(balanco)
  expect(analises.length).toBe(2)
})

test('grafico', () => {
  const analises = analiseVerticalBalanco(createBalancoTeste())
  const grafico = dadosGraficoVertical(analises)
  expect(grafico[0].nome).toBe('Ativo Circulante')
  expect(grafico[4].nome).toBe('Patrimonio Liquido')
  expect(grafico).toContainEqual({ 
    nome: 'Ativo Não Circulante',
    atual: 75.70753822942965,
    anterior: 76.26137170140009 
  })
})

