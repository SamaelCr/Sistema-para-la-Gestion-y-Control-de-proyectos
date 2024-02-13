import { GanttComponent } from './gantt/gantt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttModuleComponent } from './gantt-module.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GanttModuleComponent, GanttComponent],
  exports: [GanttComponent],
})
export class GanttModuleModule {}
