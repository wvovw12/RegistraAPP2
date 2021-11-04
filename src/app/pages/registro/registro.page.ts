import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


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

  constructor(private storage:Storage, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.saveUser(this.usuario);
  }

  async saveUser(usr:Usuario){
    await this.storage.set(usr.username, usr);
    this.presentAlert('¡Bien!, te has registrado correctamente');
    console.log('Se guardó el usuario');
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: 'Registrado correctamente',
      message: mensaje,
      buttons: [{text:'OK', handler: () => {document.location.href='login';}}]
    });

    await alert.present();
  }
}
