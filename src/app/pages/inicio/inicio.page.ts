import { Component, OnInit } from '@angular/core';
<<<<<<< refs/remotes/origin/Diego
import { Storage } from '@ionic/storage-angular';
import { ValidacionUsuario } from '../../interfaces/validacion-usuario';

=======
>>>>>>> Inicio proyecto

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

<<<<<<< refs/remotes/origin/Diego
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

=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> Inicio proyecto
}
