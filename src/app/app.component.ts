import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  @ViewChild('f') todoForm: NgForm ;
  todo = '';
  todoList = [];

  onSubmit(form:NgForm){
    this.todoList.push(this.todo);
    this.todoForm.reset(form);
    return this.todoList; 
  }

  onDelete(index){
    this.todoList.splice(index, 1);
  }
}