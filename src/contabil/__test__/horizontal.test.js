import {createBalancoDemo} from '../balanco'
import {analiseHorizontal} from '../horizontal'

test('analise horizontal', () => {
  const balanco = createBalancoDemo()
  const analise = analiseHorizontal(balanco)

})