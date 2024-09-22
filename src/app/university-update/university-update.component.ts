import { Component, OnInit } from '@angular/core';
import { University, UniversityType } from '../university';
import { UniversityOBJECT } from '../dummyUniversity';
import { UniversityService } from '../university.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-university-update',
  templateUrl: './university-update.component.html',
  styleUrls: ['./university-update.component.css'],
})
export class UniversityUpdateComponent implements OnInit {
  university: University = new UniversityOBJECT();
  universityTypes = Object.values(UniversityType);
  otherInformation: { key: string; value: any }[] = [];
  imageFile?: File;

  constructor(
    private service: UniversityService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    if (id) {
      this.service.getUniversityById(+id).subscribe((data: University) => {
        this.university = data;
        this.otherInformation = Object.entries(data.otherInformation || {}).map(
          ([key, value]) => ({ key, value })
        );
      });
    } else {
      // Handle the case where id is null, e.g., redirect or show an error
      console.error('University ID is null or undefined');
      this.router.navigate(['/universities']); // Or handle as needed
    }
  }

  onSubmit() {
    const formdata: FormData = new FormData();
    const otherInfo: { [key: string]: any } = {};
    this.otherInformation.forEach((info) => {
      if (info.key && info.value) {
        otherInfo[info.key] = info.value;
      }
    });
    this.university.otherInformation = otherInfo;
    formdata.append('university', JSON.stringify(this.university));
    if (this.imageFile) {
      formdata.append('image', this.imageFile);
    }

    this.service
      .updateUniversity(this.university.id as number, formdata)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/universities']);
      });
  }
  removeKey(index: number) {
    if (this.otherInformation.length > 1) {
      this.otherInformation.splice(index, 1);
    }
  }
  addField() {
    this.otherInformation.push({ key: '', value: '' });
  }
  onImageChange(event: any) {
    this.imageFile = event.target.value[0];
  }
}
