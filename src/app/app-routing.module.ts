import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";

const routes: Routes = [
  {
    path: 'todo-template',
    component: TodoComponent
  },
  {
    path: 'todo-form',
    component: TodoFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
