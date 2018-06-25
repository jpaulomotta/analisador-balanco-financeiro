import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Tabela = ({analiseVertical}) => {
  const Row = ({nome, tipo, conta}) => (
    <tr>
      <td>{nome}</td>
      {analiseVertical.map(periodo => (
        <td key={periodo.ano}>{(periodo[tipo][conta]*100).toFixed(2)}%</td>
      ))}
    </tr>
  )
  return (
    <div className="card shadow">
      <table className="table">
        <thead>
          <tr>
            <th>Ativo</th>
            {analiseVertical.map(periodo => (
              <th key={periodo.ano}>{periodo.ano}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row nome="Circulante" tipo="ativo" conta="circulante" />
          <Row nome="Não Circulante" tipo="ativo" conta="naoCirculante" />
        </tbody>
        <thead>
          <tr>
            <th colSpan={analiseVertical.length+1}>Passivo</th>  
          </tr>
        </thead>
        <tbody>
          <Row nome="Circulante" tipo="passivo" conta="circulante" />
          <Row nome="Não Circulante" tipo="passivo" conta="naoCirculante" />
          <Row nome="Patrimonio Liquido" tipo="passivo" conta="patrimonioLiquido" />
        </tbody>
      </table>
    </div>
  )
}

const Grafico = ({graficoVertical}) => (
  <div className="card shadow">
    <div className="card-body">
      <ResponsiveContainer height={300}>
        <BarChart data={graficoVertical} >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="nome"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="atual" fill="#8884d8" />
          <Bar dataKey="anterior" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
)

const AnaliseVertical = ({analiseVertical, graficoVertical}) => [
  <h3 key="0">Análise Vertical</h3>,
  <div key="1" className="row">
    <div className="col-sm-6">
      <Tabela analiseVertical={analiseVertical} />
    </div>
    <div className="col-sm-6">
      <Grafico graficoVertical={graficoVertical} />
    </div>
  </div>
]

export default AnaliseVertical 