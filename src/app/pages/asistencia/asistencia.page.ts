import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Clase } from '../../interfaces/clase';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit, AfterContentChecked {

  clases: Clase[] = [];
  id: string;


  constructor(private storage: Storage, public database: DatabaseService, private activatedRoute: ActivatedRoute,
    private navCtrl: NavController) {


  }

  ngOnInit() {
    this.getClases();
  }

  async getClases() {

    const enlace = 'Clases';
    const parametro = 'user';
    let usr = await this.storage.get('Habilitado');
    console.log('//////////////////////');
    console.log(usr);

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.database.firestore.collection<Clase>(enlace, ref => ref.where(parametro, '==', usr).where('name', '==', this.id)).
    valueChanges().subscribe(data => this.clases = data);

  }

  ngAfterContentChecked() {
    let tabs = document.querySelectorAll('#tabs');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll('#tabs');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });

    }
  }

}
