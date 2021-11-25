import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario='';

  constructor(private activeroute: ActivatedRoute,private router: Router,private alertController: AlertController,
    private navCtrl: NavController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nombreUsuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
        console.log(this.nombreUsuario);
      }
    });

  }

  ngOnInit() {
    //document.querySelector('ion-tab-bar').style.display = 'none';
  }

  exitConfirm() {
    let mensaje= '¿Está seguro de que desea salir?';
    this.presentAlert(mensaje);

    }
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: '',
      subHeader: 'Confirmar',
      message: mensaje,
      buttons: [{text:'Si', handler: () =>  {this.navCtrl.navigateForward('login');}}, 'No']

    });
    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

  /*ionViewDidEnter() {
    const currentUrl = this.router.url;
    const tabBarElement = document.querySelector('ion-tab-bar');
    if(currentUrl === '/home/tabs/asistencia/MAT4140-001D') {
      console.log('chapa la pachala');
      tabBarElement.style.display = 'none';
    }
    console.log(currentUrl);
  }

  ionViewDidLeave() {
    const tabBarElement = document.querySelector('ion-tab-bar');
    tabBarElement.style.display = 'flex';
  }*/

}
