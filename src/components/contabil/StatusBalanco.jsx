import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {balancoValido} from '../../contabil/balanco'

const StatusBalanco = ({periodo}) => (
  <div>
    {periodo.find(balanco => !balancoValido(balanco)) && 
      <div className="card border-danger">
        <div className="card-body">
          <h4 className="card-title">Balanço Inválido</h4>
          <p className="card-text">O total do ativo deve ser igual ao total do passivo</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              {periodo.map(balanco => <th key={balanco.ano}>{balanco.ano}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {periodo.map(balanco => (
                <td key={balanco.ano}>{balancoValido(balanco) ? 
                  <span className="text-success">
                    <FontAwesomeIcon icon="check" /> Válido
                  </span>
                  : 
                  <span className="text-danger">
                    <FontAwesomeIcon icon="times" /> Inválido
                  </span>
                }</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    }
  </div>
)

export default StatusBalanco