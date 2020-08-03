import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { LikeComponent } from './like/like.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { movieservice } from './movie/movie.service';
import { CustomerComponent } from './customer/customer.component';
import {customerservice} from './customer/customer.service';
import { FoodComponent } from './food/food.component';
import {foodservice} from './food/foods.service';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from './login/login.component';
import { SalaryComponent } from './salary/salary.component';
import {EmployeeComponent} from './employee/employee.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ContactService } from './phonebook/phone.service';


var myRoutes=[
  {path:"customer",component:CustomerComponent,children:[{path:"salary",component:SalaryComponent}]},
  {path:"like",component:LikeComponent},
  {path:"foods",component:FoodsComponent},
  {path:"movies",component:MoviesComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    MymenuComponent,
    LikeComponent,
    MovieComponent,
    MoviesComponent,
    CustomerComponent,
    FoodComponent,
    FoodsComponent,
    LoginComponent,
    SalaryComponent,
    EmployeeComponent,
    PhonebookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [movieservice,customerservice,foodservice,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
