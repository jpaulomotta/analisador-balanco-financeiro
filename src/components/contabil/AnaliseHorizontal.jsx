import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const AnaliseHorizontal = ({analiseHorizontal}) => {
  const formatar = (valor) => {
    if(valor > 0) {
      return <span><FontAwesomeIcon icon="arrow-up" className="text-success"/> {valor.toFixed(1)}%</span>
    } else if(valor < 0) {
      return <span><FontAwesomeIcon icon="arrow-down" className="text-danger"/> {valor.toFixed(1)}%</span>
    } else {
      return <span>{valor.toFixed(1)}%</span>
    }
  }

  const Tabela = () => (
    <table className="table">
      <thead>
        <tr>
          <th>Ativo</th>
          <th>Variação</th>
          <th>Passivo</th>
          <th>Variação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Circulante</td>
          <td>{formatar(analiseHorizontal.ativo.circulante)}</td>  
          <td>Circulante</td>
          <td>{formatar(analiseHorizontal.passivo.circulante)}</td>  
        </tr>
        <tr>
          <td>Não Circulante</td>
          <td>{formatar(analiseHorizontal.ativo.naoCirculante)}</td>  
          <td>Não Circulante</td>
          <td>{formatar(analiseHorizontal.passivo.naoCirculante)}</td>  
        </tr>
        <tr>
          <td colSpan="2"></td>  
          <td>Patrimonio Liquido</td>
          <td>{formatar(analiseHorizontal.passivo.patrimonioLiquido)}</td>  
        </tr>
      </tbody>
    </table>
  )

  return (
    <div>
      <h3>Análise Horizontal</h3>
      <div className="card shadow">
        <Tabela />
      </div>
    </div>
  )
}

export default AnaliseHorizontal