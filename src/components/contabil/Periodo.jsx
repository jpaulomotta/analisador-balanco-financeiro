import React from 'react'
import {totalAtivo, totalPassivo, balancoValido} from '../../contabil/balanco'

const cellColor = (balanco) => !balancoValido(balanco) ? 'text-danger' : ''

const Input = ({balanco, tipo, conta, onChangeBalanco}) => (
  <input type="number" 
    className="form-control form-control-sm" 
    value={balanco[tipo][conta]}
    onChange={(evt) => onChangeBalanco(balanco.ano, tipo, conta, evt.target.value)} />
)

const Periodo = (props) => {
  const {periodo, onChangeBalanco} = props
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <table className="table ativos">
            <thead>
              <tr>
                <th>Ativo</th>
                {periodo.map(balanco => ( 
                  <th className={cellColor(balanco)}>{balanco.ano}</th> 
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Circulante</td>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}>
                    <Input balanco={balanco} tipo="ativo" conta="circulante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}>
                    <Input balanco={balanco} tipo="ativo" conta="naoCirculante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td colSpan={periodo.length+1} className="table-empty-col"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Ativo</th>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}><b>{totalAtivo(balanco)}</b></td> 
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
                {periodo.map(balanco => ( 
                  <th className={cellColor(balanco)}>{balanco.ano}</th> 
                ))}
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>Circulante</td>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}>
                    <Input balanco={balanco} tipo="passivo" conta="circulante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Não Circulante</td>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}>
                    <Input balanco={balanco} tipo="passivo" conta="naoCirculante" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
              <tr>
                <td>Patrimonio Liquido</td>
                {periodo.map(balanco => ( 
                  <td className={cellColor(balanco)}>
                    <Input balanco={balanco} tipo="passivo" conta="patrimonioLiquido" onChangeBalanco={onChangeBalanco} />
                  </td> 
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total do Passivo</th>
                {periodo.map(balanco => ( 
                  <th className={cellColor(balanco)}>{totalPassivo(balanco)}</th> 
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