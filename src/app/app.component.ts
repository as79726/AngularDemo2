import { Component } from "@angular/core";
import { FilterPipe } from "./filter.pipe";

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

  pushInputValue(value) {
    let newTodo = {
      text: value,
      done: false
    };
    this.todos = this.todos.concat(newTodo);
    this.todo = "";
  }

  clearCompleted($event) {
    this.todos = this.todos.filter(item => item.done === false);
  }

  filterTypeChange($event) {
    this.filterType = $event;
  }

  toggleAllChange() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo(todo) {
      this.todos = this.todos.filter(item => item !== todo);
    }
}
