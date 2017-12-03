import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from './data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputHint: string = "What needs to be done?";
  todos = new Array();
  todo: string = "";
  filterType = "All";
  isToggleAll = false;
  apiUrl: string = "http://localhost:3000/todos";

  constructor(private dataSvc: DataService) {
  }

  ngOnInit() {
    this.dataSvc.getTodos().subscribe(data => {
      console.log("get" + JSON.stringify(data));
      this.todos = data;
    });
  }
  pushInputValue(value) {
    let newTodo = {
      text: value,
      done: false
    };
   this.dataSvc.addTodo(newTodo).subscribe(data => {
     console.log("post" + JSON.stringify(data));
      this.todos = this.todos.concat(data);
      this.todo = "";
    });
  }

  clearCompleted($event) {
    this.todos.filter(item => item.done).forEach(item => {
      this.removeTodo(item);
    });
  }

  filterTypeChange($event) {
    this.filterType = $event;
  }

  toggleAllChange() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
      this.updateTodo(item);
    });
  }

  removeTodo(todo) {
    this.dataSvc.removeTodo(todo).subscribe(data => {
      this.todos = this.todos.filter(item => item != todo);
    });
  }

  updateTodo(todo) {
    this.dataSvc.updateTodo(todo).subscribe();
  }

  enterEditMode(todo){
    console.log(todo);
    todo.editText = todo.text;
    todo.isEditMode = true;
    console.log(todo);
  }

  leaveEditMode(todo){
    delete todo.editText;
    delete todo.isEditMode;
    this.updateTodo(todo);
  }

  saveEdit(todo){
    todo.text = todo.editText;
    this.leaveEditMode(todo);
  }
}
