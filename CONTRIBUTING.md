# :link: Como contribuir

Qualquer ajuda que agregue valor ao projeto, seja na edição do código-fonte ou nas documentações, e consequentemente a vida das pessoas é muito bem-vindo, por isso decidimos torna-lo open source.

## Iniciando

Certifique-se de estar na pasta raiz do projeto para executar:

`pnpm install`

`pnpm prepare` - setup do husky

`pnpm dev` - desenvolvimento local

## Mensagens de commit

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Sugerimos que as mensagens de commit sigam o padrão do _conventional commit_.

Execute `pnpm commit` para ter um painel interativo que permite seguir o padrão de commit de forma fácil.

Para saber mais, acesse esses links:

- [Especificação do Conventional Commit](https://www.conventionalcommits.org/)
- [Regras do @commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

## Pull requests (PRs)

Independente da contribuição a ser feita (no código-fonte e/ou na documentação), operacionalmente falando, temos 2 formas de fazermos as _pull requests_: localmente, via linha de comando, usando o Git em conjunto com o Github, ou online, editando diretamente os arquivos no Github e solicitando uma pull request depois, tudo graficamente.

Caso desenvolvendo localmente você precisará usar alguma versão mais recente do NodeJS para usar o NPM como gerenciador de pacotes, para instalar em seu sistema operacional basta acessar o [guia de instalação](https://nodejs.org/en/download/) caso ja tenha instalado prossiga.

## Edição local do código

Consiste em realizar o _fork_ do repositório raiz, cloná-lo, realizar a alteração e solicitar o PR para o repositório raiz.

### Realizando PRs para o repositório raiz

- Faça um _fork_ desse repositório no Github
- Faça um clone do repositório _fork_ criado: `git clone https://github.com/seuusuario/camara-dos-deputados-ts-sdk.git`
- Crie uma _branch_ para _commitar_ a sua _feature_ ou correção: `git checkout -b my-branch`
- Faça o _commit_ das mudanças: `git commit -m 'feat: My new feature'`
- Faça o _push_ da sua _branch_ para o seu _fork_: `git push origin my-branch`
- Vá para [Pull Requests](https://github.com/civictechbrasil/camara-dos-deputados-ts-sdk/pulls) do repositório raiz e crie um PR com o(s) seu(s) _commit(s)_

### Manter sua _branch_ atualizada com o repositório raiz

- Caso ainda não tenha o clone do seu _fork_ localmente, crie-o com:
  `git clone https://github.com/seuusuario/camara-dos-deputados-ts-sdk.git`
- Adicione um remote para o repositório raiz:
  `git remote add reporaiz https://github.com/seuusuario/camara-dos-deputados-ts-sdk.git` (_reporaiz_ apelido para o repositório raiz da API. Você pode usar qualquer nome\*)
- Atualize o seu repositório local a partir do remote do repositório raiz
  `git fetch reporaiz`
- Vá para sua branch:
  `git checkout my-branch`
- Atualize sua branch com as alterações da main do repositório raiz
  `git pull --rebase reporaiz main`
- Atualize o sua _branch_ remota
  `git push origin mybranch`
- Caso ocorra algum conflito ao fazer o `push`, você pode utilizar o comando
  `git push origin --force-with-lease`.
