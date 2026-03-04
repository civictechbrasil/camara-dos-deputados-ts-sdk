import { QueryParams } from '@/common/query-params';

export interface IDeputyCommittee {
  codTitulo: string;
  dataFim: string;
  dataInicio: string;
  idOrgao: number;
  nomeOrgao: string;
  nomePublicacao: string;
  siglaOrgao: string;
  titulo: string;
  uriOrgao: string;
}

export interface IListDeputyCommittees extends QueryParams {
  /** Data de início de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataInicio?: Date;

  /** Data de término de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataFim?: Date;

  /** Nome do campo de dados pelo qual a lista deve ser ordenada: `idOrgao`, `siglaOrgao`, `nomeOrgao`, `titulo`, `dataInicio` ou `dataFim`
   *
   * @default dataInicio
   */
  ordenarPor: keyof Pick<
    IDeputyCommittee,
    'idOrgao' | 'siglaOrgao' | 'nomeOrgao' | 'titulo' | 'dataInicio' | 'dataFim'
  >;
}
