import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {periodoValido} from '../../contabil/balanco'

const StatusBalanco = ({balanco}) => (
  <div>
    {balanco.find(periodo => !periodoValido(periodo)) && 
      <div className="card border-danger shadow">
        <div className="card-body">
          <h4 className="card-title">Balanço Inválido</h4>
          <p className="card-text">O total do ativo deve ser igual ao total do passivo</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              {balanco.map(periodo => <th key={periodo.ano}>{periodo.ano}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {balanco.map(periodo => (
                <td key={periodo.ano}>{periodoValido(periodo) ? 
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