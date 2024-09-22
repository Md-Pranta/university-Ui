import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css'],
})
export class UniversityDetailsComponent implements OnInit {
  university!: University;
  otherInformation: { key: string; value: any }[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: UniversityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getUniversityById(id).subscribe((data: University) => {
      this.university = data;
      this.otherInformation = Object.entries(data.otherInformation || {}).map(
        ([key, value]) => ({ key, value })
      );
    });
  }

  goBack() {
    this.router.navigate(['/universities']);
  }
}
