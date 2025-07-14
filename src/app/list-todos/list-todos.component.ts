import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../welcome/welcome.component';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
     new Todo(2, 'Become an Expert at Angular', false, new Date()),
     new Todo(3, 'Visit India', false, new Date())
  ]

}
