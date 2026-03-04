import { QueryParams } from '@/common/query-params';

export interface IDeputyEvent {
  id: number;
  dataHoraFim: string;
  dataHoraInicio: string;
  descricao: string;
  descricaoTipo: string;
  localCamara: {
    andar: string;
    nome: string;
    predio: string;
    sala: string;
  };
  localExterno: string;
  orgaos: [
    {
      id: number;
      apelido: string;
      codTipoOrgao: number;
      nome: string;
      nomePublicacao: string;
      nomeResumido: string;
      sigla: string;
      tipoOrgao: string;
      uri: string;
    },
  ];
  situacao: string;
  uri: string;
  urlRegistro: string;
}

export interface IListDeputyEvents extends QueryParams {
  /** Data de início de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataInicio?: Date;

  /** Data de término de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataFim?: Date;

  /** Qual dos elementos da representação deverá ser usado para aplicar ordenação à lista.
   *
   * @default dataHoraInicio
   */
  ordenarPor?: keyof IDeputyEvent;
}
