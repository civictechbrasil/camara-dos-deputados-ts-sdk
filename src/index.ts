import { DeputiesService, DeputyService } from './modules/deputies';
import { PropositionService, PropositionsService } from './modules/propositions';

class Camara {
  readonly deputados: DeputiesService;

  readonly deputado: DeputyService;

  readonly proposicoes: PropositionsService;

  readonly proposicao: PropositionService;

  constructor() {
    this.deputados = new DeputiesService();
    this.deputado = new DeputyService();
    this.proposicoes = new PropositionsService();
    this.proposicao = new PropositionService();
  }
}

export const camara = new Camara();
