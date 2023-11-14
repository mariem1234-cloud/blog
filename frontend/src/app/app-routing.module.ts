import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthorComponent } from './author/author.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'create', canActivate: [AuthGuard], component:CreatearticleComponent},
  {path: 'detail/:id', component:DetailComponent},
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'author/:id', component:AuthorComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
