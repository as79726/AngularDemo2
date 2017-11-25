import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint: string ="What needs to be done?";
  todos: Array<string>= new Array();
  todo: string = "";
  pushInputValue(value){
    this.todos.push(value);
    console.log(this.todos);
    this.todo = "";
  }
}
