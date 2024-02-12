import { Injectable } from '@angular/core';
import {
  getDatabase,
  ref,
  onValue,
  push,
  DataSnapshot,
} from 'firebase/database';
import { map } from 'rxjs/operators';

interface Task {
  key: string;
  // Agrega aquí las propiedades de tus tareas
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  db = getDatabase();

  getTasks() {
    const tasksRef = ref(this.db, '/tasks');
    return onValue(tasksRef, (snapshot: DataSnapshot) => {
      const tasks: Task[] = [];
      snapshot.forEach((childSnapshot: DataSnapshot) => {
        const key = childSnapshot.key as string;
        const val = childSnapshot.val();
        tasks.push({ key, ...val });
      });
      return tasks;
    });
  }

  addTask(task: Task) {
    const tasksRef = ref(this.db, '/tasks');
    return push(tasksRef, task);
  }

  // Agrega aquí los métodos para actualizar y eliminar tareas
}
