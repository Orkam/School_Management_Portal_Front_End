import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public registerUser(user: any) {
    return this.http.post(`${baseUrl}/saveUser`, user);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/allUsers`);
  }

  public getUserByRole(role: String): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/getByRole/${role}`);
  }

  public getUserByName(name: String, surname: String): Observable<User[]> {
    return this.http.get<User[]>(
      `${baseUrl}/getByName?name=${name}&surname=${surname}`
    );
  }
}
