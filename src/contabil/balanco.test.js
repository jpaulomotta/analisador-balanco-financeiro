import {createBalanco, totalAtivo, totalPassivo, balancoValido, createSeries} from './balanco'

test('inicializa balanco vazio', () => {
  const balanco = createBalanco(2017)
  expect(balanco).toEqual({
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
  const balancos = createSeries([2018, 2017])
  expect(balancos).toEqual([createBalanco(2018), createBalanco(2017)])
})

test('total ativo', () => {
  const balanco = createBalanco()
  balanco.ativo.circulante = 500
  balanco.ativo.naoCirculante = 30
  expect(totalAtivo(balanco)).toBe(530)
});

test('total passivo', () => {
  const balanco = createBalanco()
  balanco.passivo.circulante = 400
  balanco.passivo.naoCirculante = 15
  balanco.passivo.patrimonioLiquido = 5
  expect(totalPassivo(balanco)).toBe(420)
});

test('valido', () => {
  let b = createBalanco()
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
  expect(balancoValido(b)).toBe(true)
  
  b.ativo.circulante++
  expect(balancoValido(b)).toBe(false)
})

test('balanco inicial é valido', () => {
  expect(balancoValido(createBalanco())).toBe(true)
})

test('analise horizontal')