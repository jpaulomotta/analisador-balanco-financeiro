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