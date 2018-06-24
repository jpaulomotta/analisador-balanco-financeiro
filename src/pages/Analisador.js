import React from 'react'
import {compose, withState, withHandlers, withProps} from 'recompose'
import {createBalancoDemo} from '../contabil/balanco'
import Layout from './Layout'
import Analisador from '../components/contabil/Analisador'
import {analiseVerticalBalanco, dadosGraficoVertical} from '../contabil/vertical'

const enhance = compose(
  withState('balanco', 'updatePeriodo', createBalancoDemo()),
  withHandlers({
    onChangeBalanco: ({updatePeriodo}) => (ano, tipo, conta, valor) => {
      updatePeriodo(balanco => {
        const periodo = balanco.find(periodo => periodo.ano === ano)
        let valorConvertido = parseFloat(valor)
        if(isNaN(valorConvertido)) { valorConvertido = 0 }
        periodo[tipo][conta] = valorConvertido
        return balanco
      })
    }
  }),
  withProps(({balanco}) => ({
    analiseVertical: analiseVerticalBalanco(balanco),
    graficoVertical: dadosGraficoVertical(analiseVerticalBalanco(balanco))
  }))
)
const AnalisadorPage = (props) => (
  <Layout>
    <Analisador {...props} />
  </Layout>
)

export default enhance(AnalisadorPage)