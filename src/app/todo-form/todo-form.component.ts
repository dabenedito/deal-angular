import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Todo } from "../todo/model/todo";
import { TodoService } from "../services/todo.service";
import { Observable, map, of } from "rxjs";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: [ './todo-form.component.css' ]
})

export class TodoFormComponent implements OnInit, OnDestroy {
  todoList$: Observable<Todo[]> = of();
  sub: any;
  todoForm = new FormGroup({
    descricao: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ])
  });

  constructor(private todoService: TodoService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.obterDados();
  }

  private tratarErro(erro: any): void {
    console.log('Ops... Não foi possível obter os dados. ', erro);
  }

  obterDados(): void {
    this.todoList$ = this.todoService.obterDados()
      .pipe(
        map(res => res)
      );
  }

  salvar() {
    if(this.todoForm.invalid) {
      alert('preencha o campo descricao corretamente');
      return;
    }

    let newTodo = {
      descricao: this.todoForm.controls[ 'descricao' ].value,
    };

    this.todoService.salvar(newTodo).subscribe(
      (resposta) => this.obterDados(),
      (erro) => this.tratarErro(erro)
    );

    this.todoForm.reset();
  }

  removerTarefa(id: number): void {
    this.todoService.removerTarefa(id).subscribe(
      (resposta) => this.obterDados(),
      (erro) => this.tratarErro(erro)
    );
  }

  concluirTarefa(item: Todo): void {
    item.concluido = !item.concluido;
    this.todoService.concluirTarefa(item).subscribe(
      (resposta) => this.obterDados(),
      (erro) => this.tratarErro(erro)
    );
  }

}
