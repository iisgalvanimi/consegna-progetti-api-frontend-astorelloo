import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [ 
  { path: 'generic/:id', component: GenericComponent },
  { path: 'animals', component: AnimalsComponentComponent},
  { path: 'fruits', component: FruitsComponentComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
