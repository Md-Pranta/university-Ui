import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityAddComponent } from './university-add/university-add.component';
import { UniversityUpdateComponent } from './university-update/university-update.component';
import { UniversitySearchComponent } from './university-search/university-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'universities', pathMatch: 'full' },
  { path: 'universities', component: UniversityListComponent },
  { path: 'universities/add', component: UniversityAddComponent },
  { path: 'universities/update/:id', component: UniversityUpdateComponent },
  { path: 'universities/search', component: UniversitySearchComponent },
  { path: 'universities/all/:id', component: UniversityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
