import React from 'react'
import {compose, withState} from 'recompose'
import {createPeriodoDemo} from '../contabil/balanco'
import Layout from './Layout'
import Analisador from '../components/contabil/Analisador'

const enhance = compose(
  withState('periodo', 'updatePeriodo', createPeriodoDemo())
)
const AnalisadorPage = (props) => (
  <Layout>
    <Analisador {...props} />
  </Layout>
)

export default enhance(AnalisadorPage)