import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingledistrictComponent } from './pages/singledistrict/singledistrict.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'district',
  component:DistrictComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
path:'single',
component:SingledistrictComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
