import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityAddComponent } from './university-add/university-add.component';
import { UniversityUpdateComponent } from './university-update/university-update.component';
import { UniversitySearchComponent } from './university-search/university-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversityDetailsComponent } from './university-details/university-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    UniversityAddComponent,
    UniversityUpdateComponent,
    UniversitySearchComponent,
    UniversityDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
