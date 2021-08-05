
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { UxproductsService } from './uxproducts.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';

  const appRoutes:Routes=[
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'home', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'manage-product', component:ManageProductsComponent},
    {path:'manage-user', component:ManageUserComponent},
    //  {path:'products',children:[                   // child routes
    //    {path:'', component:ProductsComponent},
    //   {path:'laptop', component:LaptopComponent}
    // ]},
    {path:'products', component:ProductsComponent,children:[           //child routes             //child routes
      {path:'laptop', component:LaptopComponent},
      {path:'mobile', component:MobileComponent},
      {path:'television', component:TelevisionComponent},
      {path:'washing-machine', component:WashingMachineComponent}
    ]},
    
   {path:'**',component:PageNotFoundComponent}


   
  ]

@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent,
    ManageUserComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UxproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
