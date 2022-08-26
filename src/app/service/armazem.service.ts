import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {

  private produto = new Subject<any>();

  constructor(private firestore: AngularFirestore) {}

  // cadastrar(produto: ProductModel): Promise<any> {
  //   return this.firestore.collection('tarjetas').add(tarjeta);
  // }
  //
  // obtenerTarjetas(): Observable<any> {
  //   return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  // }
  //
  // eliminarTarjeta(id: string): Promise<any> {
  //   return this.firestore.collection('tarjetas').doc(id).delete();
  // }
  //
  // editarTarjeta(id: string, tarjeta: any): Promise<any> {
  //   return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  // }
  //
  // addTarjetaEdit(tarjeta: TarjetaCredito) {
  //   this.tarjeta$.next(tarjeta);
  // }
  //
  // getTarjetaEdit(): Observable<TarjetaCredito> {
  //   return this.tarjeta$.asObservable();
  // }
}
