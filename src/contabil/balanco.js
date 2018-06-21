
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

export const createSeries = (anos=[]) => anos.map(ano => createBalanco(ano))
export const totalAtivo = ({ativo}) => (ativo.circulante + ativo.naoCirculante)
export const totalPassivo = ({passivo}) => (passivo.circulante + passivo.naoCirculante + passivo.patrimonioLiquido)

export const balancoValido = (b) => (totalAtivo(b) === totalPassivo(b))
