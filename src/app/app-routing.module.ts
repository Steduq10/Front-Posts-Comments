import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './components/app.component';
import {CommentsPageComponent} from './comments-page/comments-page.component'

const routes: Routes = [
  {path: '', redirectTo: 'post', pathMatch: 'full'}
  {path: 'post', component: AppComponent},
  {path: 'comment/:id', component: CommentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
