import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
=======
<<<<<<< HEAD
import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories/categories.component';
=======
>>>>>>> 25f991081566894876baf2e19e8af4942a7ca7e4
>>>>>>> 740031f241567519cbc214e5e903c59cbf3e8e18

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
<<<<<<< HEAD
    ContactComponent,
=======
<<<<<<< HEAD
    ListComponent,
    CategoriesComponent,
=======
>>>>>>> 25f991081566894876baf2e19e8af4942a7ca7e4
>>>>>>> 740031f241567519cbc214e5e903c59cbf3e8e18
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
