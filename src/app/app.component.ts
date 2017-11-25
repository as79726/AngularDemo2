import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.todos = data;
    });
  }
  pushInputValue(value) {
    let newTodo = {
      text: value,
      done: false
    };
    this.http.post(this.apiUrl, newTodo).subscribe(data => {
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
    this.http.delete(`${this.apiUrl}/${todo.id}`, todo).subscribe(data => {
      this.todos = this.todos.filter(item => item != todo);
    });
  }

  updateTodo(todo) {
    this.http.put(`${this.apiUrl}/${todo.id}`, todo)
         .subscribe();
  }
}
