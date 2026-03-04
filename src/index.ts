import { DeputiesService, DeputyService } from './modules/deputies';

class Camara {
  readonly deputados: DeputiesService;

  readonly deputado: DeputyService;

  constructor() {
    this.deputados = new DeputiesService();
    this.deputado = new DeputyService();
  }
}

export const camara = new Camara();
