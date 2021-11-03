import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesPageRoutingModule } from './clases-routing.module';

import { ClasesPage } from './clases.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClasesPage]
})
export class ClasesPageModule {}
