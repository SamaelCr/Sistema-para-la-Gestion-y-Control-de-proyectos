import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { ProyectosCreacionComponent } from './proyectos-creacion/proyectos-creacion.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
} from '@coreui/angular';

// import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ValidationComponent } from "../../views/forms/validation/validation.component";
import { FormsRoutingModule } from '../../views/forms/forms-routing.module';
import { CoreUIFormsModule } from '../../views/forms/forms.module'

@NgModule({
  imports: [
    CoreUIFormsModule,
    CommonModule,
    FormsRoutingModule,
    // DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    ValidationComponent,
  ],
  declarations: [ProyectosComponent, ProyectosCreacionComponent],
})
export class ProyectosModule { }
