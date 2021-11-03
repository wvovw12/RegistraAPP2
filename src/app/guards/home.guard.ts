import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {

  constructor(private navCtrl:NavController, private storage:Storage) {

  };

  async validar() {
<<<<<<< refs/remotes/origin/Diego
    if(await this.storage.get('Habilitado')) {
=======
    if(this.storage.get('Habilitado')) {
>>>>>>> Inicio proyecto
      console.log('deberia pasar');
      return true;
    }
    else {
      console.log('no deberia pasar');
      this.navCtrl.navigateRoot('login');
      return false;
    }
  };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
<<<<<<< refs/remotes/origin/Diego
    return this.validar();
=======
    return true;
>>>>>>> Inicio proyecto
  }

}
