import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University, UniversityType } from './university';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private api = 'http://localhost:8080/universities';

  constructor(private http: HttpClient) {}

  //add university
  createUniversity(university: any, image?: File): Observable<University> {
    const formData: FormData = new FormData();
    formData.append('university', JSON.stringify(university));
    if (image) formData.append('image', image);
    return this.http.post<University>(`${this.api}/add`, formData);
  }

  //update university
  updateUniversity(id: number, university: any): Observable<University> {
    return this.http.put<University>(`${this.api}/update/${id}`, university);
  }

  //get all universities
  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.api}/all`);
  }

  //get university
  getUniversityById(id: Number): Observable<University> {
    return this.http.get<University>(`${this.api}/all/${id}`);
  }

  //delete university
  deleteUniversity(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.api}/delete/${id}`);
  }

  //search by terms
  searchUniversities(params: {
    name?: string;
    address?: string;
    type?: UniversityType;
    ratingFrom?: number;
    ratingTo?: number;
    description?: string;
    openFrom?: Date;
    openTo?: Date;
  }): Observable<University[]> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    return this.http.get<University[]>(`${this.api}/search`, {
      params: httpParams,
    });
  }
}
