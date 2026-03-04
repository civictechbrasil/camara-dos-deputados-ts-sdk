import { QueryParams } from '@/common/query-params';

export interface IDeputySpeech {
  dataHoraFim: string;
  dataHoraInicio: string;
  faseEvento: {
    dataHoraFim: string;
    dataHoraInicio: string;
    titulo: string;
  };
  keywords: string;
  sumario: string;
  tipoDiscurso: string;
  transcricao: string;
  uriEvento: string;
  urlAudio: string;
  urlTexto: string;
  urlVideo: string;
}

export interface IListDeputySpeeches extends QueryParams {
  /** Número da(s) legislatura(s), separados por vírgulas, às quais os dados buscados devem corresponder. */
  idLegislatura?: number[];

  /** Data de início de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataInicio?: Date;

  /** Data de término de um intervalo de tempo, no formato `AAAA-MM-DD`. */
  dataFim?: Date;

  /** Qual dos elementos da representação deverá ser usado para aplicar ordenação à lista.
   *
   * @default dataHoraInicio
   */
  ordenarPor?: keyof Pick<IDeputySpeech, 'dataHoraInicio'>;
}
