import { GanttModuleComponent } from './gantt-module.component';
import { GanttComponent } from './gantt/gantt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GanttComponent, GanttModuleComponent],
  exports: [GanttComponent, GanttModuleComponent],
  providers: [FirebaseService],
})
export class GanttModuleModule {}
