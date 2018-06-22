import React from 'react'
import Periodo from '../contabil/Periodo'
import StatusBalanco from './StatusBalanco'

const Analisador = (props) => (
  <div>
    <section className="mb-3">
      <h1>Balanço Financeiro</h1>
      <Periodo {...props} />
    </section>

    <section>
      <StatusBalanco {...props} />
    </section>
  </div>
)

export default Analisador