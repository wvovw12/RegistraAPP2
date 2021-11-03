import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  personas=[{
    nombre:'Programacion AppMoviles 003D',
    apellido:'Alejandro Sanhueza',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'120%'

=======
    asistencia:'120%',
    detalles:'03-05-2021: ✔..................................................... 02-06-2021: X' ,
>>>>>>> Inicio proyecto
  },
  {
    nombre:'Estadistica Descriptiva A005',
    apellido:'Manolo Suazo',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'10%'
=======
    asistencia:'10%',
    detalles:`a0                         s`
>>>>>>> Inicio proyecto
  },

  {
    nombre:'Ingles D007',
    apellido:'Claudio Palma',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'68%'
=======
    asistencia:'68%',
    detalles:'03-05-2021: ✔ 02-06-2021: X' 
>>>>>>> Inicio proyecto

  },
  {
    nombre:'Arquitectura 003D',
    apellido:'Jazna muñoz',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'85%'
=======
    asistencia:'85%',
    detalles:'03-05-2021: ✔ 02-06-2021: X' 
>>>>>>> Inicio proyecto

  },
  {
    nombre:'Calidad de Software 002D',
    apellido:'Carlos Riffo',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'70%'

=======
    asistencia:'70%',
    detalles:'03-05-2021: ✔ 02-06-2021: X' 
>>>>>>> Inicio proyecto
  },
  {
    nombre:'Etica para el trabajo 002D',
    apellido:'Claudia Palma',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'100%'
=======
    asistencia:'100%',
    detalles:'03-05-2021: ✔ 02-06-2021: X' 
>>>>>>> Inicio proyecto

  },
  {
    nombre:'Proceso Portafolio 420D',
    apellido:'Andres Trujillo',
<<<<<<< refs/remotes/origin/Diego
    asistencia:'0%'

=======
    asistencia:'0%',
    detalles:'03-05-2021: ✔ 02-06-2021: X' 
>>>>>>> Inicio proyecto
  },
    ];

  constructor() { }

  ngOnInit() {
  }

}
