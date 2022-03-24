import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "./model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() title: string = 'Valor padrão';
  model: Todo = {description: ''}
  todoList: Todo[] = [];

  constructor() {  }

  ngOnInit(): void {  }

  salvar() {
    if (!this.model.description) {
      alert("Preencha o campo corretamente");
      return;
    }

    let newTodo: Todo = {
      description: this.model.description
    }
    this.todoList.push(newTodo);
    this.model.description = '';
    alert("Registro inserido com sucesso.")
  }
}
