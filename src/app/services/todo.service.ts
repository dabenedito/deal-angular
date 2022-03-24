import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from "../todo/model/todo";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {}

  obterDados(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${ environment.apiUrl }/todo`);
  }

  salvar(todo: {descricao: string}): Observable<any> {
    return this.httpClient.post(`${ environment.apiUrl }/todo`, todo);
  }

  concluirTarefa(item: Todo): Observable<any> {
    return this.httpClient.put(`${ environment.apiUrl }/todo/${ item.id }`, item);
  }

  removerTarefa(id: number): Observable<any> {
    return this.httpClient.delete(`${ environment.apiUrl }/todo/${ id }`);
  }
}
