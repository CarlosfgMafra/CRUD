import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  form: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
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

  }

}
