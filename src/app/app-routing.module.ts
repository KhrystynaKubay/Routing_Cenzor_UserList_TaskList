import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';


import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path : 'works', component: WorksComponent, children:[
    {path: '', pathMatch: 'full', redirectTo: 'cenzor'},
    {path : 'cenzor', component: CenzorComponent},
    {path : 'userlist', component: UserListComponent},
    {path : 'tasklist', component: TaskListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
