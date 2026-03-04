import {
  IDeputy,
  IDeputyCommittee,
  IDeputyEvent,
  IDeputyExpense,
  IDeputyExternalMandate,
  IDeputyFront,
  IDeputyHistory,
  IDeputyProfession,
  IDeputyProfessionalActivity,
  IDeputySpeech,
  IListDeputyCommittees,
  IListDeputyEvents,
  IListDeputyExpenses,
  IListDeputySpeeches,
} from '../interfaces';
import { apiRoutes, request } from '@/common/api';

export class DeputyService {
  /**
   * Informações detalhadas sobre um deputado específico
   *
   * Retorna os dados cadastrais de um parlamentar identificado por `{idDeputado}` que,
   * em algum momento da história e por qualquer período, entrou em exercício na Câmara.
   *
   * @param idDeputado
   *
   * */
  async detalhes({ idDeputado }: { idDeputado: number }) {
    return request<IDeputy>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}`,
    });
  }

  /**
   * As despesas com exercício parlamentar do deputado
   *
   * Dá acesso aos registros de pagamentos e reembolsos feitos pela Câmara em prol do deputado identificado por `{idDeputado}`,
   * a título da Cota para Exercício da Atividade Parlamentar, a chamada "cota parlamentar".
   *
   * A lista pode ser filtrada por mês, ano, legislatura, CNPJ ou CPF de um fornecedor.
   *
   * Se não forem passados os parâmetros de tempo, o serviço retorna os dados dos seis meses anteriores à requisição.
   *
   * @param idDeputado
   * */
  async despesas({ idDeputado, ...params }: { idDeputado: number } & IListDeputyExpenses) {
    return request<IDeputyExpense[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/despesas`,
      params,
    });
  }

  /**
   * Os discursos feitos por um deputado em eventos diversos
   *
   * Retorna uma lista de informações sobre os pronunciamentos feitos pelo deputado identificado por `{idDeputado}` que tenham
   * sido registrados, em quaisquer eventos, nos sistemas da Câmara.
   *
   * Caso os parâmetros de tempo (`dataInicio`, `dataFim` e `idLegislatura`) não sejam configurados na requisição, são buscados
   * os discursos ocorridos nos sete dias anteriores ao da requisição.
   *
   * @param idDeputado
   * */
  async discursos({ idDeputado, ...params }: { idDeputado: number } & IListDeputySpeeches) {
    return request<IDeputySpeech[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/discursos`,
      params,
    });
  }

  /**
   * Uma lista de eventos com a participação do parlamentar
   *
   * Retorna uma lista de objetos `evento` nos quais a participação do parlamentar identificado por `{idDeputado}` era ou é prevista.
   *
   * Um período de tempo pode ser delimitado para a busca.
   *
   * Se não forem passados parâmetros de tempo, são retornados os eventos num período de cinco dias, sendo dois antes e dois depois do dia da requisição.
   *
   * Os itens podem ser ordenados por `id`, `siglaOrgao` ou `dataHoraInicio`
   *
   * @param idDeputado
   * */
  async eventos({ idDeputado, ...params }: { idDeputado: number } & IListDeputyEvents) {
    return request<IDeputyEvent[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/eventos`,
      params,
    });
  }

  /**
   * As frentes parlamentares das quais um deputado é integrante
   *
   * Retorna uma lista de informações básicas sobre as frentes parlamentares das quais o parlamentar identificado por
   * `{idDeputado}` seja membro, ou, no caso de frentes existentes em legislaturas anteriores, tenha encerrado a legislatura como integrante.
   *
   * @param idDeputado
   * */
  async frentes({ idDeputado }: { idDeputado: number }) {
    return request<IDeputyFront[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/frentes`,
    });
  }

  /**
   * Lista de mudanças no exercício parlamentar de um deputado
   *
   * Um deputado pode, no meio de uma legislatura, mudar de partido ou de nome parlamentar, entrar em licença, ser afastado ou
   * substituir outro deputado. Como essas mudanças se refletem em votações, ou na autoria e relatoria de proposições, pode
   * se tornar difícil identificar um mesmo parlamentar em diferentes momentos de sua atuação na Câmara.
   *
   * @param idDeputado
   * */
  async historico({ idDeputado }: { idDeputado: number }) {
    return request<IDeputyHistory[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/historico`,
    });
  }

  /**
   * Outros cargos eletivos já exercidos pelo parlamentar em sua carreira
   *
   * Retorna uma lista em que cada item traz informações básicas sobre um cargo para o qual o parlamentar identificado
   * por `{idDeputado}` tenha sido eleito, em sua carreira política fora da Câmara dos Deputados. Estes dados são fornecidos pelo
   * Tribunal Superior Eleitoral. A lista vem ordenada cronologicamente, por padrão.
   *
   * @param idDeputado
   * */
  async mandatosExternos({ idDeputado }: { idDeputado: number }) {
    return request<IDeputyExternalMandate[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/mandatosExternos`,
    });
  }

  /**
   * Os empregos e atividades que o(a) deputado(a) já teve
   *
   * Enumera as atividades profissionais ou ocupacionais que o deputado identificado por `{idDeputado}` já teve em sua carreira e declarou à Câmara dos Deputados.
   *
   * ATENÇÃO: Há problemas reconhecidos de estruturação nesses dados. Os casos encontrados podem ser reportados ao Centro de
   * Documentação e Informação da Câmara, por meio do endereço https://camara.leg.br/faleconosco .
   *
   * @param idDeputado
   * */
  async ocupacoes({ idDeputado }: { idDeputado: number }) {
    return request<IDeputyProfessionalActivity[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/ocupacoes`,
    });
  }

  /**
   * Os órgãos dos quais um deputado é integrante
   *
   * Retorna uma lista de órgãos, como as comissões e procuradorias, dos quais o deputado identificado por `{idDeputado}` participa ou participou durante um intervalo de tempo.
   *
   * Cada item identifica um órgão, o cargo ocupado pelo parlamentar neste órgão (como presidente, vice-presidente, titular ou suplente)
   * e as datas de início e fim da ocupação deste cargo.
   *
   * Se não for passado algum parâmetro de tempo, são retornados os órgãos ocupados pelo parlamentar no momento da requisição.
   * Neste caso a lista será vazia se o deputado não estiver em exercício.
   *
   * @param idDeputado
   * */
  async orgaos({ idDeputado }: { idDeputado: number } & IListDeputyCommittees) {
    return request<IDeputyCommittee[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/orgaos`,
    });
  }

  /**
   * As profissões que o parlamentar declarou à Câmara que já exerceu ou que pode exercer pela sua formação e/ou experiência
   *
   * Retorna uma lista de dados sobre profissões que o parlamentar identificado por `{idDeputado}` declarou à Câmara que
   * já exerceu ou que pode exercer pela sua formação e/ou experiência.
   *
   * @param idDeputado
   * */
  async profissoes({ idDeputado }: { idDeputado: number }) {
    return request<IDeputyProfession[]>({
      method: 'GET',
      url: `${apiRoutes.deputies}/${idDeputado}/profissoes`,
    });
  }
}

export const deputado = new DeputyService();
