import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public firestore:AngularFirestore) { }

  createDocument<tipo>(data: tipo, enlace: string) {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.add(data);

  }

  getCollectionChanges<tipo>(enlace:string): Observable<tipo[]> {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.valueChanges();
  }

  getCollectionQuery<tipo>(enlace: string, parametro: string, busqueda: any): Observable<tipo[]> {
    const itemsCollection: AngularFirestoreCollection<tipo> =
      this.firestore.collection<tipo>(enlace, ref => ref.where(parametro, '==',busqueda));

    return itemsCollection.valueChanges();
}
}
