import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.db.list("tasks").valueChanges().subscribe(taskData => {
      console.log(taskData);
    })
  }

}
