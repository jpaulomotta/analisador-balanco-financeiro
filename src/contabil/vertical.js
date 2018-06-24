import {createPeriodo, totalAtivo, totalPassivo} from './balanco'

export const analiseVertical = (periodo) => {
  const analise = createPeriodo(periodo.ano)

  let totAtivo = totalAtivo(periodo)
  if(isNaN(totAtivo)) { totAtivo = 0.0 }
  analise.ativo.circulante = periodo.ativo.circulante/totAtivo
  analise.ativo.naoCirculante = periodo.ativo.naoCirculante/totAtivo

  let totPassivo = totalPassivo(periodo)
  if(isNaN(totPassivo)) { totPassivo = 0.0 }
  analise.passivo.circulante = periodo.passivo.circulante/totPassivo
  analise.passivo.naoCirculante = periodo.passivo.naoCirculante/totPassivo
  analise.passivo.patrimonioLiquido = periodo.passivo.patrimonioLiquido/totPassivo

  return analise
}

export const analiseVerticalBalanco = (balanco) => (
  balanco.map(periodo => analiseVertical(periodo))
)

export const dadosGraficoVertical = (analises) => {
  const row = (nome, tipo, conta) => (
    {nome, atual: analises[0][tipo][conta]*100, anterior: analises[1][tipo][conta]*100}
  )
  return [
    row('Ativo Circulante', 'ativo', 'circulante'),
    row('Ativo Não Circulante', 'ativo', 'naoCirculante'),
    row('Passivo Circulante', 'passivo', 'circulante'),
    row('Passivo Não Circulante', 'passivo', 'naoCirculante'),
    row('Patrimonio Liquido', 'passivo', 'patrimonioLiquido'),
  ]
}