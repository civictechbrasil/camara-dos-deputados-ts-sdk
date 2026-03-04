import { QueryParams } from '@/common/query-params';

export interface IDeputyExpense {
  ano: number;
  cnpjCpfFornecedor: string;
  codDocumento: string;
  codLote: number;
  codTipoDocumento: number;
  dataDocumento: string;
  mes: number;
  nomeFornecedor: string;
  numDocumento: string;
  numRessarcimento: string;
  parcela: number;
  tipoDespesa: string;
  tipoDocumento: string;
  urlDocumento: string;
  valorDocumento: number;
  valorGlosa: number;
  valorLiquido: number;
}

export interface IListDeputyExpenses extends QueryParams {
  /** Número(s) de uma ou mais legislatura(s), em que tenham ocorrido as despesas. */
  idLegislatura?: number[];

  /** Um ou mais ano(s) de ocorrência das despesas. */
  ano?: number[];

  /** Um ou mais número(s) do(s) mês(es) de ocorrência das despesas. */
  mes?: number[];

  /** CNPJ de uma pessoa jurídica, ou CPF de uma pessoa física, fornecedora do produto ou serviço (apenas números). */
  cnpjCpfFornecedor?: string;

  /** Nome do campo pelo qual a lista deverá ser ordenada: qualquer um dos campos do retorno, e também idLegislatura
   *
   * @default ano
   */
  ordenarPor?: keyof IDeputyExpense | 'idLegislatura';
}
