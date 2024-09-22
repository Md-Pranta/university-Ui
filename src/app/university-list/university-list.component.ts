import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from '../university';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css'],
})
export class UniversityListComponent implements OnInit {
  universities: University[] = [];

  constructor(private service: UniversityService) {}

  ngOnInit(): void {
    this.loadUniversities();
  }

  loadUniversities() {
    this.service.getAllUniversities().subscribe({
      next: (res) => {
        console.log(res);
        this.universities = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  deleteUniversity(id: Number | undefined): void {
    if (id !== undefined)
      this.service
        .deleteUniversity(id)
        .subscribe(() => this.loadUniversities());
  }
}
