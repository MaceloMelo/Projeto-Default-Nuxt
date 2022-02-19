import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { IProduto } from "../interfaces/IProduto";

@Module
export default class Produto extends VuexModule {
  produtos = Array<IProduto>();

  @Mutation
  ADICIONAR_PRODUTO(produto: IProduto) {
    this.produtos.push(produto);
  }

  @Action({ commit: "ADICIONAR_PRODUTO" })
  adicionarProduto(produto: IProduto) {
    return produto;
  }
}
