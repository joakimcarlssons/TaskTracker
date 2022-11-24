import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task?: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>;
  faTimes = faTimes;

  onDelete(task: Task | undefined) {
    if (task) this.onDeleteTask.emit(task);
    else {
      console.error('No task provided!');
    }
  }

  onToggle(task: Task | undefined) {
    if (task) this.onToggleReminder.emit(task);
    else {
      console.error('No task provided!');
    }
  }
}
