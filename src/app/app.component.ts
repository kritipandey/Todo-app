import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  todo = '';
  todoList = [];

  onAdd(){
    this.todoList.push(this.todo);
    this.todo = '';
    return this.todoList; 
  }

  onDelete(index){
    this.todoList.splice(index, 1);
  }

  onDeleteAll(){
    this.todoList = [];
  }
}