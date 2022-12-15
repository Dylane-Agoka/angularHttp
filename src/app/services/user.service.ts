import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    let myHeaders = new HttpHeaders({'myHeader': 'headerValue'});
    myHeaders = myHeaders.set('id', '1234');
    myHeaders = myHeaders.append('id', '0000');
    return this.http.get<User[]>(`${this.apiUrl}/users`, { headers: myHeaders });
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }
}
