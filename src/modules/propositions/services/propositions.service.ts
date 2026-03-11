import { IListPropositions, IPropositionPreview } from '../interfaces';
import { apiRoutes, request } from '@/common/api';

export class PropositionsService {
  /** Lista configurável de proposições na Câmara
   *
   * Lista de informações básicas sobre projetos de lei, resoluções, medidas provisórias, emendas, pareceres e todos os
   * outros tipos de proposições na Câmara.
   *
   * Por padrão, são retornadas todas as proposições que foram apresentadas ou tiveram alguma mudança de situação nos últimos 30 dias.
   * Esse intervalo de tramitação pode ser configurado pelos parâmetros `dataInicio` e `dataFim`.
   *
   * Se for(em) passado(s) um ou mais dos parâmetros...
   *
   * - `id`
   * - `ano`
   * - `dataApresentacaoInicio`
   * - `dataApresentacaoFim`
   * - `idAutor`
   * - `autor`
   *
   * ...o intervalo de tramitação só será levado em consideração se os parâmetros `dataInicio` e/ou `dataFim` estiverem explicitamente configurados.
   * Se não estiverem, poderão ser listadas proposições que não tiveram tramitação recente (e a resposta pode demorar bastante).
   */
  async listagem(listPropositions?: IListPropositions) {
    return request<IPropositionPreview[]>({
      method: 'GET',
      url: apiRoutes.propositions,
      params: listPropositions,
    });
  }
}

export const proposicoes = new PropositionsService();
