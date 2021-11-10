import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { NameComponent } from './name/name.component';
import { PowersComponent } from './powers/powers.component';

const routes: Routes = [
  {path:'name', component: NameComponent},
  {path:'header', component: HeaderComponent},
  {path:'powers', component:PowersComponent},
  {path:'about-us', component:AboutUsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
