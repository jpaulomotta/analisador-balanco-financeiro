import React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import {createPeriodoDemo} from '../contabil/balanco'
import Layout from './Layout'
import Analisador from '../components/contabil/Analisador'

const enhance = compose(
  withState('periodo', 'updatePeriodo', createPeriodoDemo()),
  withHandlers({
    onChangeBalanco: ({updatePeriodo}) => (ano, tipo, conta, valor) => {
      updatePeriodo(periodo => {
        const balanco = periodo.find(balanco => balanco.ano === ano)
        let valorConvertido = parseFloat(valor)
        if(isNaN(valorConvertido)) { valorConvertido = 0 }
        balanco[tipo][conta] = valorConvertido
        return periodo
      })
    }
  })
)
const AnalisadorPage = (props) => (
  <Layout>
    <Analisador {...props} />
  </Layout>
)

export default enhance(AnalisadorPage)