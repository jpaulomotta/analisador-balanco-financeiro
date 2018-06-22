import React from 'react'
import Periodo from '../contabil/Periodo'

const Analisador = (props) => (
  <div>
    <section>
      <h1>Balanço Financeiro</h1>
      <Periodo {...props} />
    </section>
  </div>
)

export default Analisador