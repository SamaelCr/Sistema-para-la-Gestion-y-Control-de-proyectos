import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { gantt } from 'dhtmlx-gantt';
import { FirebaseService } from '../../../services/firebase.service'; // Asegúrate de importar tu servicio de Firebase

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'gantt',
  styleUrls: ['./gantt.component.css'],

  template: `<div #gantt_here class="gantt-chart"></div>`,
})
export class GanttComponent implements OnInit {
  @ViewChild('gantt_here', { static: true }) ganttContainer!: ElementRef;

  constructor(private firebaseService: FirebaseService) {} // Inyecta el servicio de Firebase

  ngOnInit() {
    this.firebaseService.getTasks().subscribe((tasks) => {
      gantt.parse(tasks, 'json');
    });
  }

  ngAfterViewInit() {
    gantt.init(this.ganttContainer.nativeElement);
  }
}

// import {
//   Component,
//   ElementRef,
//   OnInit,
//   ViewChild,
//   ViewEncapsulation,
// } from '@angular/core';

// import { gantt } from 'dhtmlx-gantt';

// @Component({
//   encapsulation: ViewEncapsulation.None,
//   selector: 'gantt',
//   styleUrls: ['./gantt.component.css'],
//   template: `<div #gantt_here class="gantt-chart"></div>`,
// })
// export class GanttComponent implements OnInit {
//   @ViewChild('gantt_here', { static: true }) ganttContainer!: ElementRef;

//   ngOnInit() {
//     gantt.init(this.ganttContainer.nativeElement);
//   }
// }
