import { QueryParams } from '@/common/query-params';

export interface IPropositionPreview {
  id: number;
  uri: string;
  siglaTipo: string;
  codTipo: number;
  numero: number;
  ano: number;
  ementa: string;
  dataApresentacao: string;
}

export interface IPropositionStatus {
  dataHora: string;
  sequencia: number;
  siglaOrgao: string;
  uriOrgao: string;
  uriUltimoRelator: string;
  regime: string;
  descricaoTramitacao: string;
  codTipoTramitacao: string;
  descricaoSituacao: string;
  codSituacao: number;
  despacho: string;
  url: string;
  ambito: string;
  apreciacao: string;
}

export interface IProposition {
  id: number;
  uri: string;
  siglaTipo: string;
  codTipo: number;
  numero: number;
  ano: number;
  ementa: string;
  dataApresentacao: string;
  uriOrgaoNumerador: string;
  statusProposicao: IPropositionStatus;
  uriAutores: string;
  descricaoTipo: string;
  ementaDetalhada: string;
  keywords: string;
  uriPropPrincipal?: string;
  uriPropAnterior?: string;
  uriPropPosterior?: string;
  urlInteiroTeor: string;
  urnFinal?: string;
  texto?: string;
  justificativa?: string;
}

export interface IListPropositions extends QueryParams {
  /** Número(s) identificador(es) de uma ou mais proposições no Dados Abertos. */
  id?: number[];

  /** Uma ou mais sigla(s) do(s) tipo(s) das proposições que se deseja obter.
   * A lista de tipos e siglas existentes pode ser obtida em
   * `/referencias/proposicoes/siglaTipo`
   * */
  siglaTipo?: string[];

  /** Um ou mais número(s) oficialmente atribuídos às proposições segundo o art. 137
   * do Regimento Interno, como "PL 1234/2016"
   * */
  numero?: number[];

  /** Um ou mais ano(s) de apresentação das proposições que serão listadas no formato `AAAA` */
  ano?: number[];

  /** Um ou mais código(s) numérico(s) de tipo específico de proposição. A lista
   * de códigos existentes pode ser obtida em `/referencias/proposicoes/siglaTipo`
   * */
  codTipo?: number[];

  /** Um ou mais números identificador(es) do(s) deputado(s) autor(es) das proposições
   * que serão listadas. Cada número deve ser o identificador exclusivo de um parlamentar
   * no Dados Abertos
   * */
  idDeputadoAutor?: number[];

  /** Nome ou parte do nome do(s) autor(es) das proposições que se deseja obter */
  autor?: string;

  /** Uma ou mais sigla(s) do(s) partido(s) a que pertençam os autores das proposições a serem listadas */
  siglaPartidoAutor?: string[];

  /** Identificador numérico no Dados Abertos do partido a que pertençam os autores das proposições que serão listadas.
   * Esses identificadores podem ser obtidos em `/partidos` e são mais precisos do que as siglas, que podem ser usadas
   * por partidos diferentes em épocas diferentes
   * */
  idPartidoAutor?: number;

  /** Uma ou mais sigla(s) de unidade(s) da federação (estados e Distrito Federal) pela(s) qual(quais) o(s) autor(es) das
   * proposições selecionadas tenha(m) sido eleito(s)
   * */
  siglaUfAutor?: string[];

  /** Uma ou mais palavras chaves sobre o tema a que a proposição se relaciona */
  keywords?: string[];

  /** Indicador booleano, com valor `TRUE` ou `FALSE` para trazer apenas proposições que já tenha tramitado no Senado */
  tramitacaoSenado?: boolean;

  /** Data do início do intervalo de tempo em que tenha havido tramitação das proposições a serem listadas, no formato `AAAA-MM-DD`.
   * Se omitido, é assumido como a data de 30 dias anteriores à proposição
   * */
  dataInicio?: string;

  /** Data do fim do intervalo de tempo em que tenha havido tramitação das proposições a serem listadas. Se omitido, é considerado
   * ser o dia em que é feita a requisição */
  dataFim?: string;

  /** Data do início do intervalo de tempo em que tenham sido apresentadas as proposições a serem listadas, no formato `AAAA-MM-DD` */
  dataApresentacaoInicio?: string;

  /** Data do fim do intervalo de tempo em que tenham sido apresentadas as proposições a serem listadas */
  dataApresentacaoFim?: string;

  /** Código(s) numérico(s) do tipo de situação em que se encontram as proposições que serão listadas. As situações possíveis
   * podem ser obtidas em `/referencias/proposicoes/codSituacao`. Atenção: este parâmetro pode apresentar resultados inesperados,
   * por problemas com o registro dos dados.
   * */
  codSituacao?: number[];

  /** Código(s) numérico(s), separados por vírgulas, das áreas temáticas das proposições que serão listadas. Os temas possíveis
   * `podem ser obtidos em /referencias/proposicoes/codTema`
   * */
  codTema?: number[];

  /** Nome do campo pelo qual a lista deve ser ordenada: `id`, `codTipo`, `siglaTipo`, `numero` ou `ano` */
  ordenarPor?: keyof Pick<IPropositionPreview, 'id' | 'codTipo' | 'siglaTipo' | 'numero' | 'ano'>;
}
