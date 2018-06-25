
export const createPeriodo = (ano=2018) => (
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

export const createBalanco = (anos=[]) => anos.map(ano => createPeriodo(ano))
export const totalAtivo = ({ativo}) => (ativo.circulante + ativo.naoCirculante)
export const totalPassivo = ({passivo}) => (passivo.circulante + passivo.naoCirculante + passivo.patrimonioLiquido)

export const periodoValido = (b) => (formatMoney(totalAtivo(b)) === formatMoney(totalPassivo(b)))

export const createBalancoTeste = () => ([
  {
    ano: 2018,
    ativo: {
      circulante: 32042,
      naoCirculante: 99859,
    },
    passivo: {
      circulante: 37517,
      naoCirculante: 29794,
      patrimonioLiquido: 64590
    }
  },
  {
    ano: 2017,
    ativo: {
      circulante: 29434,
      naoCirculante: 94558,
    },
    passivo: {
      circulante: 33321,
      naoCirculante: 28333,
      patrimonioLiquido: 62338
    }
  }
])

/*eslint-disable */
export const formatMoney = (num) => {
  const formatter = (n, c, d, t) => {
    var c = isNaN(c = Math.abs(c)) ? 2 : c, 
      d = d == undefined ? "." : d, 
      t = t == undefined ? "," : t, 
      s = n < 0 ? "-" : "", 
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10)), 
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }
  return formatter(num, 2, '.', ',')
};
/*eslint-enable */
