export interface QueryParams {
  /** Número da página de resultados, a partir de `1`, que se deseja obter com a
   * requisição, contendo o número de itens definido pelo parâmetro itens.
   * Se omitido, assume o valor `1`. */
  pagina?: number;

  /** Número máximo de itens na página que se deseja obter com esta requisição. */
  itens?: number;

  /** O sentido da ordenação: `ASC` para A a Z ou 0 a 9, e `DESC` para Z a A ou 9 a 0. */
  ordem?: 'ASC' | 'DESC';
}
