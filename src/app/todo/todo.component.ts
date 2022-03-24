import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "./model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() title: string = 'Valor padrão';
  model: Todo = {id: 0, descricao: '', concluido: false}
  todoList: Todo[] = [];

  constructor() {  }

  ngOnInit(): void {  }

  salvar() {
    if (!this.model.descricao) {
      alert("Preencha o campo corretamente");
      return;
    }

    let newTodo: Todo = {
      id: 0,
      descricao: this.model.descricao,
      concluido: false,
    }
    this.todoList.push(newTodo);
    this.model.descricao = '';
    alert("Registro inserido com sucesso.")
  }
}
