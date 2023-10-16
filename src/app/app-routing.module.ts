import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './CurrentGetall/getall.component';
import { CurrentGetbyIdComponent } from './current-getby-id/current-getby-id.component';
import { CurrentPutComponent } from './current-put/current-put.component';
import { CurrentDeleteComponent } from './current-delete/current-delete.component';
import { CurrentInsertComponent } from './current-insert/current-insert.component';
// import { SavingGetallComponent } from './saving-getall/saving-getall.component';

const routes: Routes = [
  {path : '', redirectTo:'/list', pathMatch:'full'},
  {path:'getall', component :GetallComponent },
  {path:'Getbyid', component :CurrentGetbyIdComponent},
  {path:'putbyid', component :CurrentPutComponent},
  {path:'deletebyid', component : CurrentDeleteComponent},
  {path:'post', component :CurrentInsertComponent},
  {path:'**',redirectTo:'/list'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [

//   {path : '', redirectTo:'/list', pathMatch:'full'},
//   {path:'insert', component :CakeShoplistComponent},
//   {path:'detail', component :CakeShopdetailComponent},
//   {path:'putbyid', component :CakeputComponent},
//   {path:'post', component :CakePostComponent},
//   {path:'deletebyid', component :CakedeleteComponent},
//   {path:'**',redirectTo:'/list'}
      

// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }