import { NgModule } from '@angular/core';
import { ProyectosCreacionComponent } from './proyectos-creacion/proyectos-creacion.component';

import { CommonModule } from '@angular/common';
import { GanttModuleModule } from '../gantt-module/gantt-module.module';

@NgModule({
  imports: [CommonModule, GanttModuleModule],
  declarations: [ProyectosCreacionComponent],
  exports: [ProyectosCreacionComponent],
})
export class ProyectosModule {}
