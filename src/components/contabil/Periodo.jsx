import React from 'react'
import {totalAtivo, totalPassivo} from '../../contabil/balanco'

const Periodo = (props) => {
  const {periodo} = props
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <table className="table ativos">
            <thead>
              <tr>
                <th>Ativo</th>
                {periodo.map(balanco => ( <th>{balanco.ano}</th> ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Circulante</td>
                {periodo.map(balanco => ( 
                  <td>{balanco.ativo.circulante}</td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {periodo.map(balanco => ( 
                  <td>{balanco.ativo.naoCirculante}</td> 
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Ativo</th>
                {periodo.map(balanco => ( 
                  <td><b>{totalAtivo(balanco)}</b></td> 
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <table className="table ativos">
            <thead>
              <tr>
                <th>Passivo</th>
                {periodo.map(balanco => ( <th>{balanco.ano}</th> ))}
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>Circulante</td>
                {periodo.map(balanco => ( 
                  <td>{balanco.passivo.circulante}</td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {periodo.map(balanco => ( 
                  <td>{balanco.passivo.naoCirculante}</td> 
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Passivo</th>
                {periodo.map(balanco => ( 
                  <th>{totalPassivo(balanco)}</th> 
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Periodo