import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User, Project, Task } from './types';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  db = getFirestore();
  auth = getAuth();

  getTasks(): Observable<Task[]> {
    const userId = this.auth.currentUser?.uid;
    const tasksCollection = collection(this.db, `tasks/${userId}`);
    return new Observable((observer) => {
      getDocs(tasksCollection).then((querySnapshot) => {
        const tasks: Task[] = [];
        querySnapshot.forEach((doc) => {
          tasks.push({ taskId: doc.id, ...doc.data() } as Task);
        });
        observer.next(tasks);
      });
    });
  }

  addTask(task: Task) {
    const userId = this.auth.currentUser?.uid ?? '';
    const taskRef = doc(this.db, `/tasks/${userId}/${task.taskId}`);
    return setDoc(taskRef, task);
  }

  updateTask(task: Task) {
    const userId = this.auth.currentUser?.uid ?? '';
    const taskRef = doc(this.db, `/tasks/${userId}/${task.taskId}`);
    return setDoc(taskRef, task, { merge: true });
  }

  deleteTask(task: Task) {
    const userId = this.auth.currentUser?.uid ?? '';
    const taskRef = doc(this.db, `/tasks/${userId}/${task.taskId}`);
    return deleteDoc(taskRef);
  }
}
