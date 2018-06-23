import {createPeriodo} from './balanco'


const calcular = (balanco, tipo, conta) => ( 
  (balanco[0][tipo][conta] - balanco[1][tipo][conta]) / balanco[1][tipo][conta] )

export const analiseHorizontal = (balanco) => {
  let analise = createPeriodo()
  delete analise.ano
  
  Object.keys(analise.ativo).forEach(conta => analise.ativo[conta] = calcular(balanco, 'ativo', conta))
  Object.keys(analise.passivo).forEach(conta => analise.passivo[conta] = calcular(balanco, 'passivo', conta))

  return analise
}