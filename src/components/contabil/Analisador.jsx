import React from 'react'
import Periodo from '../contabil/Periodo'
import StatusBalanco from './StatusBalanco'
import AnaliseVertical from './AnaliseVertical'

const Analisador = (props) => (
  <div className="analisador">
    <section>
      <h1>Balanço Financeiro</h1>
      <Periodo {...props} />
    </section>

    <section>
      <StatusBalanco {...props} />
    </section>

    <section>
      <AnaliseVertical {...props} />
    </section>
  </div>
)

export default Analisador