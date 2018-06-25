import React from 'react'
import {compose, withState, withHandlers, withProps} from 'recompose'
import {createBalancoTeste, createBalanco} from '../contabil/balanco'
import Layout from './Layout'
import Analisador from '../components/contabil/Analisador'
import {analiseVerticalBalanco, dadosGraficoVertical} from '../contabil/vertical'
import {analiseHorizontal} from '../contabil/horizontal'
import {modeloJBS} from '../contabil/modelos'

const enhance = compose(
  withState('balanco', 'updateBalanco', createBalanco([2018, 2017])),
  withHandlers({
    onChangeBalanco: ({updateBalanco}) => (ano, tipo, conta, valor) => {
      updateBalanco(balanco => {
        const periodo = balanco.find(periodo => periodo.ano === ano)
        let valorConvertido = parseFloat(valor)
        if(isNaN(valorConvertido)) { valorConvertido = 0 }
        periodo[tipo][conta] = valorConvertido
        return balanco
      })
    },
    setBalancoAula4Junho: ({updateBalanco}) => () => updateBalanco(createBalancoTeste()),
    setBalancoJBS: ({updateBalanco}) => () => updateBalanco(modeloJBS()),
    resetarBalanco: ({updateBalanco}) => () => updateBalanco(createBalanco([2018, 2017]))
  }),
  withProps(({balanco}) => ({
    analiseVertical: analiseVerticalBalanco(balanco),
    graficoVertical: dadosGraficoVertical(analiseVerticalBalanco(balanco)),
    analiseHorizontal: analiseHorizontal(balanco),
  }))
)
const AnalisadorPage = (props) => (
  <Layout>
    <Analisador {...props} />
  </Layout>
)

export default enhance(AnalisadorPage)