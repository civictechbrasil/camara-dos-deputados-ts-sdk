export interface IPropositionProcedure {
  id: number;
  idLegislatura: number;
  titulo: string;
  uri: string;
}

export interface IListPropositionProcedure {
  /** Data do início da tramitação, no formato `AAAA-MM-DD`. */
  dataInicio?: Date;

  /** Data do fim da tramitação */
  dataFim?: Date;
}
