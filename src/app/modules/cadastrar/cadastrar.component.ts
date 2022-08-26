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
      this.toastr.success('O produto foi registrado com êxito!', 'Produto Cadastrado!')
      this.form.reset();
    },error => {
      this.loading = false;
      this.toastr.error('Opps.. Produto não registrado!', 'Error');
      console.log(error);
    })
  }
  }


