import {Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit} from '@angular/core';
import {ArmazemService} from "../../service/armazem.service";
import {ToastrService} from "ngx-toastr";
import {ProdutoModel} from "../../shared/interface/produto";
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';// IMPORTANT
registerLocaleData(localePt); //

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt' },{
    provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class ListarComponent implements OnInit {
  product:ProdutoModel[] =[];

  constructor(
    private produto: ArmazemService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(){
    this.produto.retornar().subscribe(doc => {
      this.product = [];
      doc.forEach((element:any)=>{
        this.product.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.product);
    })
  }

  deletarProdutos(id:any){
    this.produto.deletar(id).then(() =>{
      this.toastr.error('Produto deletado com exitô!','Produto deletado!')
    }, error => {
      this.toastr.error('Opss... Ocorreu um erro!','Erro');
      console.log(error);
    })
  }

  editarProdutos(produto:ProdutoModel){
    this.produto.adicionar(produto);
  }
}
