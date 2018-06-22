
export const createBalanco = (ano=2018) => (
  {
    ano,
    ativo: {
      circulante: 0,
      naoCirculante: 0,
    },
    passivo: {
      circulante: 0,
      naoCirculante: 0,
      patrimonioLiquido: 0
    }
  }
)

export const createPeriodo = (anos=[]) => anos.map(ano => createBalanco(ano))
export const totalAtivo = ({ativo}) => (ativo.circulante + ativo.naoCirculante)
export const totalPassivo = ({passivo}) => (passivo.circulante + passivo.naoCirculante + passivo.patrimonioLiquido)

export const balancoValido = (b) => (totalAtivo(b) === totalPassivo(b))

export const createPeriodoDemo = () => ([
  {
    ano: 2018,
    ativo: {
      circulante: 400,
      naoCirculante: 500,
    },
    passivo: {
      circulante: 0,
      naoCirculante: 0,
      patrimonioLiquido: 0
    }
  },
  {
    ano: 2017,
    ativo: {
      circulante: 300,
      naoCirculante: 700,
    },
    passivo: {
      circulante: 0,
      naoCirculante: 0,
      patrimonioLiquido: 0
    }
  }
])