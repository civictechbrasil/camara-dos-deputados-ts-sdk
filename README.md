# @civictechbrasil/camara-dos-deputados

SDK TypeScript para acesso à API da Câmara dos Deputados

## Descrição

Este projeto fornece um SDK em TypeScript para consultar dados públicos da Câmara dos Deputados (Brasil). O objetivo é encapsular chamadas HTTP, serializar parâmetros e expor serviços tipados para facilitar o consumo programático de endpoints relacionados a deputados.

## Estrutura do projeto

- `src/common/api.ts`: cliente HTTP central (`request`) e definição das rotas base (`apiRoutes`).
- `src/modules/deputies/services/deputies.service.ts`: serviço para listagem e busca de deputados.
- `src/modules/deputies/services/deputy.service.ts`: serviço com endpoints relacionados a um deputado específico.
- `src/modules/deputies/interfaces`: tipos/contratos usados pelos serviços.

## Principais objetivos

- Fornecer chamadas tipadas para os endpoints mais usados da API pública da Câmara.
- Encapsular tratamento de parâmetros e respostas (serialização / transformação de modelos).

## Rotas/funcionalidades cobertas (atualmente)

As rotas cobertas são expostas pelos serviços dentro de `src/modules/deputies/services`. Abaixo está uma lista das rotas já implementadas e uma descrição de cada uma.

- `GET /deputados` — listagem de deputados

  - Serviço: `DeputiesService.listagem(listDeputies?)`
  - Descrição: retorna uma lista de deputados (pré-visualização) segundo critérios opcionais como `idLegislatura`, `siglaPartido`, `siglaUf`, `nome`, `dataInicio`, etc. Se nenhum filtro de tempo for passado, a lista traz deputados em exercício.
  - Uso: enviar parâmetros como `idLegislatura` ou `dataInicio` via `params`.

- `GET /deputados/{id}` — detalhes do deputado

  - Serviço: `DeputyService.detalhes({ idDeputado })`
  - Descrição: dados cadastrais completos de um deputado identificado por `idDeputado`.

- `GET /deputados/{id}/despesas` — despesas (cota parlamentar)

  - Serviço: `DeputyService.despesas({ idDeputado, ...params })`
  - Descrição: registros de despesas da cota parlamentar do deputado. Aceita filtros por mês, ano, legislatura, CNPJ/CPF de fornecedor etc. Se não forem informados parâmetros temporais, retorna os últimos 6 meses.

- `GET /deputados/{id}/discursos` — discursos e pronunciamentos

  - Serviço: `DeputyService.discursos({ idDeputado, ...params })`
  - Descrição: discursos registrados para o deputado. Se não houver filtros temporais, busca os 7 dias anteriores por padrão.

- `GET /deputados/{id}/eventos` — eventos com participação do deputado

  - Serviço: `DeputyService.eventos({ idDeputado, ...params })`
  - Descrição: eventos em que o deputado participou ou participou previsto, com possibilidade de filtrar por período. Ordenação disponível por `id`, `siglaOrgao` ou `dataHoraInicio`.

- `GET /deputados/{id}/frentes` — frentes parlamentares

  - Serviço: `DeputyService.frentes({ idDeputado })`
  - Descrição: lista de frentes parlamentares das quais o deputado participou.

- `GET /deputados/{id}/historico` — histórico de alterações de exercício

  - Serviço: `DeputyService.historico({ idDeputado })`
  - Descrição: histórico de mudanças no exercício parlamentar (partido, licença, substituições etc.).

- `GET /deputados/{id}/mandatosExternos` — mandatos eletivos externos

  - Serviço: `DeputyService.mandatosExternos({ idDeputado })`
  - Descrição: cargos eletivos fora da Câmara que o parlamentar já exerceu (dados do TSE).

- `GET /deputados/{id}/ocupacoes` — ocupações e atividades profissionais

  - Serviço: `DeputyService.ocupacoes({ idDeputado })`
  - Descrição: atividades profissionais declaradas pelo parlamentar. Obs.: dados com problemas estruturais podem existir.

- `GET /deputados/{id}/orgaos` — órgãos e comissões

  - Serviço: `DeputyService.orgaos({ idDeputado })`
  - Descrição: órgãos (ex.: comissões) dos quais o deputado participou, com cargo e período.

- `GET /deputados/{id}/profissoes` — profissões declaradas
  - Serviço: `DeputyService.profissoes({ idDeputado })`
  - Descrição: lista de profissões que o parlamentar declarou.

## Como usar

1. Instalação

```bash
pnpm install
```

2. Configurar a URL base (opcional)

O cliente HTTP utiliza a variável `API_BASE_URL` se presente; caso contrário, usa a constante padrão definida em `src/common/constants.ts`.

3. Exemplo mínimo (TypeScript)

```ts
import { camara } from "@civictechbrasil/camara-dos-deputados";

async function exemplo() {
  // Listagem
  const lista = await camara.deputados.listagem({ idLegislatura: 57 });
  console.log(lista.dados);

  // Detalhes
  const detalhes = await camara.deputado.detalhes({ idDeputado: 204536 });
  console.log(detalhes.dados);
}

exemplo();
```

## Observações e próximos passos

- O SDK foca atualmente em endpoints relacionados a deputados (listagem e contexto por deputado). Em breve, irei expandir para outras entidades (votações, proposições, comissões) e adicionar exemplos de testes e documentação de tipos.

## Contribuição

Abra um PR com alterações ou sugestões. Siga as diretrizes em `CONTRIBUTING.md`.

## Licença

Consulte o arquivo `LICENCE.md` no repositório.
