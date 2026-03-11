export interface IPropositionVote {
  id: string;
  aprovacao: number;
  data: string;
  dataHoraRegistro: string;
  descricao: string;
  proposicaoObjeto: string;
  siglaOrgao: string;
  uri: string;
  uriEvento: string;
  uriOrgao: string;
  uriProposicaoObjeto: string;
}

export interface IListPropositionVote {
  /** O sentido da ordenação: `asc` para A a Z ou 0 a 9, e `desc` para Z a A ou 9 a 0.
   *
   * @default DESC
   */
  ordem?: 'ASC' | 'DESC';

  /** Nome do campo pelo qual a lista será ordenada: `id`, `dataHoraRegistro`
   *
   * @default dataHoraRegistro
   */
  ordenarPor?: keyof Pick<IPropositionVote, 'id' | 'dataHoraRegistro'>;
}
