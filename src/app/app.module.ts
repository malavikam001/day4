import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingledistrictComponent } from './pages/singledistrict/singledistrict.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    ContactComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    SingledistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
