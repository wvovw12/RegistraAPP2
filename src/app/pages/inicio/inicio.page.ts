import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ValidacionUsuario } from '../../interfaces/validacion-usuario';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario:ValidacionUsuario={
    desc:'',
    user:''
  };

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.mostrarUser();
  }

  async mostrarUser() {
    let usr = await this.storage.get('Habilitado');
    this.usuario.user = usr;

  };

}
