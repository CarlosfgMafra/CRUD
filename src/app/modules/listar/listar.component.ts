import { Component, OnInit } from '@angular/core';
import {ArmazemService} from "../../service/armazem.service";
import {ToastrService} from "ngx-toastr";
import {ProdutoModel} from "../../shared/interface/produto";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
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
}
