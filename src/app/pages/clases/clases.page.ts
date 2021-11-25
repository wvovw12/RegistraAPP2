import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Asignaturas } from '../../interfaces/asignaturas';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  asignaturas: Asignaturas[] = [];

  constructor(public database: DatabaseService, private storage: Storage) { }

  ngOnInit() {
    this.getAsignaturas();
  }

  async getAsignaturas() {
    const enlace = 'Asignaturas';;
    //let userDatabase = this.database.getCollectionChanges<Usuario>('Usuarios').subscribe(res => this.usuarios = res);
    let usr = await this.storage.get('Habilitado');
    this.database.getCollectionChanges<Asignaturas>(enlace).subscribe(data => this.asignaturas = data);


  }

}
