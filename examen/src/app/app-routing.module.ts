import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { PostComponent } from './blog/post/post.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LastUsersComponent } from './last-users/last-users.component'; // Importa el componente LastUsersComponent
import {NavegaComponent} from './navega/navega.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/my-best-blog', component: PostComponent },
  { path: 'admin/blog', component: AdminblogComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'last-users', component: LastUsersComponent },
  { path: 'nave', component: NavegaComponent },
  { path: 'pok', component: PokemonListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
