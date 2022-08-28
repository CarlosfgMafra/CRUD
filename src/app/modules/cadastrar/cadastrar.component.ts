import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProdutoModel} from "../../shared/interface/produto";
import {ArmazemService} from "../../service/armazem.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  form: FormGroup;
  loading = false;
  id: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private armazem: ArmazemService,
    private toastr: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      categoria: ['', Validators.required],
      preco: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
this.armazem.geteditar().subscribe(data => {
  this.id = data.id;
  this.form.patchValue(({
    categoria: data.categoria,
    preco: data.preco,
    descricao: data.descricao,
  }))
})

  }

  decidir(){
    if (this.id === undefined){
      this.cadastrar();
    } else {
      this.editarProduto(this.id);
    }
  }




  cadastrar(){
    const cadastro: ProdutoModel = {
      categoria: this.form.value.categoria,
      preco: this.form.value.preco,
      descricao: this.form.value.descricao,
    }

    this.loading = true;
    this.armazem.cadastrar(cadastro).then(()=>{
      this.loading = false;
      console.log('Produto Cadastrado!');
      this.form.reset();
      this.toastr.success('O produto foi registrado com êxito!', 'Produto Cadastrado!')
    },error => {
      this.loading = false;
      this.toastr.error('Opps.. Produto não registrado!', 'Error');
      console.log(error);
    })
  }

  editarProduto(id: string){
    const cadastro: any = {
      categoria: this.form.value.categoria,
      preco: this.form.value.preco,
      descricao: this.form.value.descricao,
    }

    this.loading = true;
    this.armazem.editar(id,cadastro).then(()=>{
      this.loading = false;
      console.log('Editar Cadastrado!');
      this.form.reset();
      this.id = undefined;
      this.toastr.info('O produto foi editado com êxito!', 'Produto Editado!')
    },error => {
      this.toastr.error('Opps.. Produto não editado!', 'Error');
      console.log(error);
    })

  }



  }


