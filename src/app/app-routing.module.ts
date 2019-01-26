import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemanComponent } from './teman/teman.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { AnggotaListComponent } from './anggota-list/anggota-list.component';

// Routes adalah nama kelasnya, routes nama variabel nya
// tulisan penamaan home,404, teman, header, dan contact-us bebas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'teman', component: TemanComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'anggota', component: AnggotaComponent },
  { path: 'anggota-add', component: AnggotaComponent },
  { path: 'anggota-edit/:id', component: AnggotaComponent },
  { path: 'anggota-list', component: AnggotaListComponent }
];

//import digunkan untuk mengimport path
//exports digunakan untuk bisa di akses disemua modul
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
