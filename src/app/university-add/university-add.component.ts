import { Component, OnInit } from '@angular/core';
import { University, UniversityType } from '../university';
import { UniversityService } from '../university.service';
import { Router } from '@angular/router';
import { UniversityOBJECT } from '../dummyUniversity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-university-add',
  templateUrl: './university-add.component.html',
  styleUrls: ['./university-add.component.css'],
})
export class UniversityAddComponent implements OnInit {
  university: University = new UniversityOBJECT();
  // universityForm: FormGroup;
  universityTypes = Object.values(UniversityType);
  otherInformation: { key: string; value: any }[] = [];
  imageFile?: File;

  constructor(
    private fb: FormBuilder,
    private service: UniversityService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    const formData = new FormData();

    const otherInfo: { [key: string]: any } = {};
    this.otherInformation.forEach((info: { key: string; value: any }) => {
      if (info.key && info.value) {
        otherInfo[info.key] = info.value;
      }
    });

    this.university.otherInformation = otherInfo;
    formData.append('university', JSON.stringify(this.university));
    console.log(formData);

    this.service
      .createUniversity(this.university, this.imageFile)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/universities']);
      });
  }

  onImageChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  removeKey(index: number) {
    if (this.otherInformation.length > 1) {
      this.otherInformation.splice(index, 1);
    }
  }
  addField() {
    this.otherInformation.push({ key: '', value: '' });
  }
}
