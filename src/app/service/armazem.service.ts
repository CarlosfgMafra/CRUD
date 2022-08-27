import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProdutoModel} from "../shared/interface/produto";
import {ref} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {


  constructor(private firestore: AngularFirestore) {}

  cadastrar(produto: ProdutoModel): Promise<any> {
    return this.firestore.collection('Produtos').add(produto);
  }

  retornar(): Observable<any>{
    return this.firestore.collection('Produtos', ref => ref.orderBy('categoria',"asc")).snapshotChanges();
  }

}
