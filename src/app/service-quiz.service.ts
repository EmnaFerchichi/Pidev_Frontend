import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qcm } from './models/quiz.model';
const baseUrl = 'http://localhost:8096//SpringMVC/qcms';

@Injectable({
  providedIn: 'root'
})
export class ServiceQuizService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Qcm[]> {
    return this.http.get<Qcm[]>(baseUrl);
  }
  get(id: any): Observable<Qcm> {
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
  findByTitle(title: any): Observable<Qcm[]> {
    return this.http.get<Qcm[]>(`${baseUrl}?title=${title}`);
  }
  

  





}
