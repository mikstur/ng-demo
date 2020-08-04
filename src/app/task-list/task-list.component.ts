import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  title: string = 'Test Title';

  tasks: Array<Task> = [];

  task: Task = new Task();

  constructor(
    private db: AngularFireDatabase,
  ) {
    const task = new Task();
    task.id = 1;
    task.title = 'Test 1';
    this.tasks.push(task);
  }

  ngOnInit(): void {
    // this.db
    //   .list('tasks')
    //   .valueChanges()
    //   .subscribe((taskData) => {
    //     console.log(taskData);
    //   });
  }

  editTask(task: Task) {
    console.log('Editing...', task);
  }

  deleteTask(task: Task) {
    console.log('Deleting... ', task);
  }

  submitTask() {
    console.log("Submitting... ", this.task);
    const newTask = this.task;
    this.tasks.push(newTask);
    this.task = new Task();
  }
}
