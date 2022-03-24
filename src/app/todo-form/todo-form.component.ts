import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoList: { description: string }[] = [];
  todoForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ])
  });

  constructor() { }

  ngOnInit(): void {  }

  salvar() {
    if (this.todoForm.invalid) {
      alert("Preencha o campo corretamente");
      return;
    }

    let newTodo = { description: this.todoForm.controls['description'].value };
    this.todoList.push(newTodo);
    this.todoForm.reset();
    alert("Registro inserido com sucesso.")
  }

}
