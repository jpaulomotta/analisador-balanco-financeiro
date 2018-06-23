import { createPeriodo, totalAtivo, totalPassivo, 
  periodoValido, createBalanco, formatMoney } from '../balanco'

test('inicializa periodo vazio', () => {
  const periodo = createPeriodo(2017)
  expect(periodo).toEqual({
    ano: 2017,
    ativo: {
      circulante: 0,
      naoCirculante: 0,
    },
    passivo: {
      circulante: 0,
      naoCirculante: 0,
      patrimonioLiquido: 0
    }
  })
})

test('inicializa serie', () => {
  const periodos = createBalanco([2018, 2017])
  expect(periodos).toEqual([createPeriodo(2018), createPeriodo(2017)])
})

test('total ativo', () => {
  const periodo = createPeriodo()
  periodo.ativo.circulante = 500
  periodo.ativo.naoCirculante = 30
  expect(totalAtivo(periodo)).toBe(530)
});

test('total passivo', () => {
  const periodo = createPeriodo()
  periodo.passivo.circulante = 400
  periodo.passivo.naoCirculante = 15
  periodo.passivo.patrimonioLiquido = 5
  expect(totalPassivo(periodo)).toBe(420)
});

test('valido', () => {
  let b = createPeriodo()
  b = {...b, 
    passivo: {
      circulante: 20,
      naoCirculante: 10,
      patrimonioLiquido: 10
    },
    ativo: {
      circulante: 20,
      naoCirculante: 20
    }
  }

  expect(totalAtivo(b)).toBe(40)
  expect(totalPassivo(b)).toBe(40)
  expect(periodoValido(b)).toBe(true)
  
  b.ativo.circulante++
  expect(periodoValido(b)).toBe(false)
})

test('periodo inicial é valido', () => {
  expect(periodoValido(createPeriodo())).toBe(true)
})

test('format money', () => {
  expect(formatMoney(2000)).toBe('2,000.00')
})

test('analise horizontal')