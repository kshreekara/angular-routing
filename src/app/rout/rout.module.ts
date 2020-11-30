import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router'
import { Routes } from '@angular/router';
import { UserComponent } from '../users/user/user.component';
import { HomeComponent } from '../home/home.component';
import { ServerComponent } from '../servers/server/server.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'users', component:UserComponent},
  
  {path:'servers', component:ServerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[]

})
export class RoutModule { }
