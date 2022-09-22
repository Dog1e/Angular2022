import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, MenuComponent, GalleryComponent, PageNotFoundComponent, ContactComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}