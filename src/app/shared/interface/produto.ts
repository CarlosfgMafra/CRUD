export class ProdutoModel {

  id?: string;
  categoria: string;
  preco: number;
  descricao: string;

  constructor(categoria: string,preco: number,descricao: string) {

    this.categoria = categoria;
    this.preco = preco;
    this.descricao = descricao;
  }
}
