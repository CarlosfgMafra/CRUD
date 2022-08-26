import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProdutoModel} from "../shared/interface/produto";

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {


  constructor(private firestore: AngularFirestore) {}

  cadastrar(produto: ProdutoModel): Promise<any> {
    return this.firestore.collection('Produtos').add(produto);
  }

}
