import { QueryParams } from '@/common/query-params';

export interface IDeputyPreview {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
}

export interface IDeputyLastStatus {
  id: number;
  condicaoEleitoral: string;
  data: string;
  descricaoStatus: string;
  email: string;
  gabinete: {
    andar: string;
    email: string;
    nome: string;
    predio: string;
    sala: string;
    telefone: string;
  };
  idLegislatura: number;
  nome: string;
  nomeEleitoral: string;
  siglaPartido: string;
  siglaUf: string;
  situacao: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;
}

export interface IDeputy {
  id: number;
  cpf: string;
  dataFalecimento?: string;
  dataNascimento: string;
  escolaridade: string;
  municipioNascimento: string;
  nomeCivil: string;
  redeSocial?: string[];
  sexo: 'M' | 'F';
  ufNascimento: string;
  ultimoStatus?: Partial<IDeputyLastStatus>;
  uri: string;
  urlWebsite?: string;
}

export interface IListDeputies extends QueryParams {
  /** Número(s) identificador(es) de um deputado. */
  id?: number[];

  /** Parte nome parlamentar. */
  nome?: string;

  /** Número(s) identificador(es) de uma ou mais legislatura(s) de que os parlamentares tenham participado. */
  idLegislatura?: number[];

  /** Uma ou mais sigla(s) de unidades federativas (estados e Distrito Federal). Uma lista de siglas válidas pode ser obtida em
   * `/referencias/deputados/siglaUf`. Se ausente, serão retornados deputados de todos os estados. */
  siglaUf?: string[];

  /** Uma ou mais sigla(s) de partidos aos quais sejam filiados os deputados. Para obter as siglas válidas, consulte `/partidos`.
   * Atenção: partidos diferentes podem usar a mesma sigla em diferentes legislaturas! */
  siglaPartido?: string[];

  /** Letra que designe o gênero dos parlamentares que se deseja buscar, sendo `M` para masculino e `F` para feminino. */
  siglaSexo?: 'M' | 'F';

  /** Nome do campo pelo qual a lista deve ser ordenada: `id`, `idLegislatura`, `nome`, `siglaUF` ou `siglaPartido`.
   *
   * @default nome
   */
  ordenarPor?: keyof Pick<IDeputyPreview, 'id' | 'idLegislatura' | 'nome' | 'siglaUf' | 'siglaPartido'>;
}
