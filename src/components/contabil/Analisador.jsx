import React from 'react'
import Periodo from '../contabil/Periodo'
import StatusBalanco from './StatusBalanco'
import AnaliseVertical from './AnaliseVertical'
import AnaliseHorizontal from './AnaliseHorizontal'

const Analisador = (props) => (
  <div className="analisador">
    <section>
      <Periodo {...props} />
    </section>
    
    <section>
      <StatusBalanco {...props} />
    </section>

    <section>
      <AnaliseVertical {...props} />
    </section>
    
    <section>
      <AnaliseHorizontal {...props} />
    </section>
  </div>
)

export default Analisador