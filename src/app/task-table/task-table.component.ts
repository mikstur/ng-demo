import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  @Input() tasks: Array<Task>;

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
