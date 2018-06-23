import React from 'react'
import {totalAtivo, totalPassivo, periodoValido, formatMoney} from '../../contabil/balanco'

const cellColor = (periodo) => !periodoValido(periodo) ? 'text-danger' : ''

const Input = ({periodo, tipo, conta, onChangeBalanco}) => (
  
  <input type="number" 
    className="form-control form-control-sm" 
    value={periodo[tipo][conta]}
    onChange={(evt) => onChangeBalanco(periodo.ano, tipo, conta, evt.target.value)} />
)

const Periodo = (props) => {
  const {balanco, onChangeBalanco} = props
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <table className="table ativos">
            <thead>
              <tr>
                <th>Ativo</th>
                {balanco.map(periodo => ( 
                  <th key={periodo.ano} className={cellColor(periodo)}>
                    {periodo.ano}
                  </th> 
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Circulante</td>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <Input periodo={periodo} tipo="ativo" conta="circulante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <Input periodo={periodo} tipo="ativo" conta="naoCirculante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td colSpan={balanco.length+1} className="table-empty-col"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Ativo</th>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <b>R$ {formatMoney(totalAtivo(periodo))}</b>
                  </td> 
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
                {balanco.map(periodo => ( 
                  <th key={periodo.ano} className={cellColor(periodo)}>{periodo.ano}</th> 
                ))}
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>Circulante</td>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <Input periodo={periodo} tipo="passivo" conta="circulante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <Input periodo={periodo} tipo="passivo" conta="naoCirculante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Patrimonio Liquido</td>
                {balanco.map(periodo => ( 
                  <td key={periodo.ano} className={cellColor(periodo)}>
                    <Input periodo={periodo} tipo="passivo" conta="patrimonioLiquido" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Passivo</th>
                {balanco.map(periodo => ( 
                  <th key={periodo.ano} className={cellColor(periodo)}>$ {formatMoney(totalPassivo(periodo))}</th> 
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