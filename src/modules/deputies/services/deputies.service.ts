import { IDeputyPreview, IListDeputies } from '../interfaces';
import { apiRoutes, request } from '@/common/api';

export class DeputiesService {
  /**
   * Listagem e busca de deputados, segundo critérios.
   *
   * Retorna uma lista de dados básicos sobre deputados que estiveram em exercício parlamentar em algum intervalo de tempo.
   * Se não for passado um parâmetro de tempo, como `idLegislatura` ou `dataInicio`, a lista enumerará somente os deputados em exercício no momento da requisição.
   *
   * */
  async listagem(listDeputies?: IListDeputies) {
    return request<IDeputyPreview[]>({
      method: 'GET',
      url: apiRoutes.deputies,
      params: listDeputies,
    });
  }
}
