import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = false;
  subscription?: Subscription;
  newTask: Task = {
    text: '',
    day: '',
    reminder: false
  }

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.showAddTask = this.uiService.getInitShowValue();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onSubmit() {
    
    if (!this.newTask.text) {
      alert('Please add a task!');
      return;
    }

    this.onAddTask.emit(this.newTask);

    this.newTask = {
      text: '',
      day: '',
      reminder: false
    }
  }
}
