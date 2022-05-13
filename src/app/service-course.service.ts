

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './models/course.model';
const baseUrl = 'http://localhost:8096//SpringMVC/courses';

@Injectable({
  providedIn: 'root'
})
export class ServiceCourseService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(baseUrl);
  }
  get(id: any): Observable<Course> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseUrl}?title=${title}`);
  }
  

  





}
