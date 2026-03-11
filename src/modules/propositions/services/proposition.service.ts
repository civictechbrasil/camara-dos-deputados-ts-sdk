import {
  IListPropositionProcedure,
  IListPropositionVote,
  IProposition,
  IPropositionAuthor,
  IPropositionProcedure,
  IPropositionRelated,
  IPropositionTheme,
  IPropositionVote,
} from '../interfaces';
import { apiRoutes, request } from '@/common/api';

export class PropositionService {
  /** Informações detalhadas sobre uma proposição específica */
  async detalhes({ idProposicao }: { idProposicao: number }) {
    return request<IProposition>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}`,
    });
  }

  /** Lista pessoas e/ou entidades autoras de uma proposição
   *
   * Retorna uma lista em que cada item identifica uma pessoa ou entidade que é autora da proposição identificada por `{idProposicao}`.
   * Além de deputados, também podem ser autores de proposições os senadores, a sociedade civil, assembleias legislativas e os
   * poderes Executivo e Judiciário.
   *
   * Pelo Regimento da Câmara, todos os que assinam uma proposição são considerados autores (art. 102), tanto os proponentes quanto os apoiadores.
   *
   * Para obter mais informações sobre cada autor, é recomendável acessar, se disponível, a URL que é valor do campo `uri`.
   */
  async autores({ idProposicao }: { idProposicao: number }) {
    return request<IPropositionAuthor[]>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}/autores`,
    });
  }

  /** Uma lista de proposições relacionadas a uma em especial
   *
   * Lista de informações básicas sobre proposições que de alguma forma se relacionam com a proposição identificada por `{idProposicao}`,
   * como pareceres, requerimentos, substitutivos, etc.
   */
  async relacionadas({ idProposicao }: { idProposicao: number }) {
    return request<IPropositionRelated[]>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}/relacionadas`,
    });
  }

  /** Lista de áreas temáticas de uma proposição
   *
   * Lista em que cada item traz informações sobre uma área temática à qual a proposição identificada por `{idProposicao}` se relaciona,
   * segundo classificação oficial do Centro de Documentação e Informação da Câmara.
   */
  async temas({ idProposicao }: { idProposicao: number }) {
    return request<IPropositionTheme[]>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}/temas`,
    });
  }

  /** O histórico de passos na tramitação de um proposta
   *
   * Lista que traz, como cada item, um "retrato" de informações que podem ser alteradas a cada etapa de tramitação na vida
   * de uma proposição (como regime de tramitação e situação) e informações sobre o que causou esse novo estado.
   *
   * Esta representação das tramitações ainda é provisória.
   */
  async tramitacoes({ idProposicao, ...params }: { idProposicao: number } & IListPropositionProcedure) {
    return request<IPropositionProcedure[]>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}/tramitacoes`,
      params,
    });
  }

  /** Informações detalhadas de votações sobre uma proposição específica
   *
   * Retorna uma lista de identificadores básicos sobre as votações na Câmara que tiveram a proposição `{idProposicao}` como objeto
   * ou como afetada pelos seus resultados. Dados complementares sobre cada votação listada podem ser obtidos no
   * recurso `/votacoes/{id}`.
   *
   * Para compreender melhor os dados sobre votações, veja a página de tutorial do Portal de Dados Abertos.
   */
  async votacoes({ idProposicao, ...params }: { idProposicao: number } & IListPropositionVote) {
    return request<IPropositionVote[]>({
      method: 'GET',
      url: `${apiRoutes.propositions}/${idProposicao}/votacoes`,
      params,
    });
  }
}

export const proposicao = new PropositionService();
