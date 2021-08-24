import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// CAROUSEL
import { MatCarouselModule } from '@ngbmodule/material-carousel';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './modules/home/component/banner/banner.component';
import { AskvisaComponent } from './modules/home/component/askvisa/askvisa.component';
import { AlauneComponent } from './modules/home/component/alaune/alaune.component';
import { MyembassyComponent } from './modules/home/component/myembassy/myembassy.component';
import { DiscoveryComponent } from './modules/home/component/discovery/discovery.component';
import { ContactComponent } from './modules/home/component/contact/contact.component';
import { NewsComponent } from './modules/news/news.component';
import { DetailsnewsComponent } from './modules/news/detailsnews/detailsnews.component';
import { Header2Component } from './shared/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    BannerComponent,
    AskvisaComponent,
    AlauneComponent,
    MyembassyComponent,
    DiscoveryComponent,
    ContactComponent,
    NewsComponent,
    DetailsnewsComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCarouselModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
