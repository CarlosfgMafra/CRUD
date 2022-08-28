import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProdutoModel} from "../shared/interface/produto";
import {ref} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {
  private product = new Subject<any>()

  constructor(private firestore: AngularFirestore) {}

  cadastrar(produto: ProdutoModel): Promise<any> {
    return this.firestore.collection('Produtos').add(produto);
  }

  retornar(): Observable<any>{
    return this.firestore.collection('Produtos', ref => ref.orderBy('categoria',"asc")).snapshotChanges();
  }

  deletar(id:string): Promise<any>{
    return this.firestore.collection('Produtos').doc(id).delete();
  }

  editar(id:string, produto: any): Promise<any>{
    return this.firestore.collection('Produtos').doc(id).update(produto);
  }

  adicionar(produto: ProdutoModel) {
    this.product.next(produto);
  }

  geteditar(): Observable<ProdutoModel>{
    return this.product.asObservable();

  }
}
