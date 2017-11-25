import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint: string ="What needs to be done?";
  todos = new Array();
  todo: string = "";
  filterType = "All";

  pushInputValue(value){
    let newTodo = {
      text:value,
      done:false
    };
    this.todos.push(newTodo);
    console.log(this.todos);
    this.todo = "";
  }

  clearCompleted($event){
    this.todos = this.todos.filter(item => item.done === false);
  }

  filterTypeChange($event){
    this.filterType = $event;
  }
}
