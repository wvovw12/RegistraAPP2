import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario={

    username:'',
    password:'',
  };

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit() {
    this.saveUser(this.usuario);
  }

  async saveUser(usr:Usuario){
    await this.storage.set(usr.username, usr);
    console.log('Se guardó el usuario');
  }
}
