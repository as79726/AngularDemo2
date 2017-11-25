import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "http://localhost:3000/todos";

  getTodos(){
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(newTodo){
    return  this.http.post(this.apiUrl, newTodo);
  }

  removeTodo(todo){
    return this.http.delete(`${this.apiUrl}/${todo.id}`, todo);
  }

  updateTodo(todo) {
       return this.http.put(`${this.apiUrl}/${todo.id}`, todo)
    }

}
