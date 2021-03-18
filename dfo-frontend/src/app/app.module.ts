import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { GetComponent } from './pages/get/get.component';
import { ListComponent } from './pages/list/list.component';

import { appRoutes } from './routes';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DfoService } from './services/dfo.service';
import { ShowErrosDirective } from './directives/ShowErrosDirective';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    GetComponent,
    ListComponent,
    HomeComponent,
    NavbarComponent,
    ShowErrosDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
