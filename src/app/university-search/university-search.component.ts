import { Component, OnInit } from '@angular/core';
import { University, UniversityType } from '../university';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.css'],
})
export class UniversitySearchComponent {
  universities: University[] = [];
  searchQuery: string = '';
  name?: string;
  universityType?: string;
  ratingFrom?: number;
  ratingTo?: number;
  description?: string;
  openForm?: Date;
  openTo?: Date;

  constructor(private service: UniversityService) {}

  onSearch() {
    const params: any = {
      name: this.name,
      universityType: this.universityType,
      ratingFrom: this.ratingFrom,
      ratingTo: this.ratingTo,
      description: this.description,
      openForm: this.openForm,
      openTo: this.openTo,
    };

    this.service.searchUniversities(params).subscribe((results) => {
      this.universities = results;
    });
  }
}
