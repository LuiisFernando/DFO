import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class DfoService {

    constructor(
        private http: HttpClient
    ) { }

    createUser(user): Observable<boolean> {
        return this.http.post<boolean>(`${environment.backendUrl}/api/user/createUser`, user);
    }

    updateUser(user): Observable<boolean> {
        return this.http.put<boolean>(`${environment.backendUrl}/api/user/UpdateUser`, user);
    }

    getUserByID(id): Observable<User> {
        return this.http.get<User>(`${environment.backendUrl}/api/user/GetUserByID/${id}`);
    }

    listUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.backendUrl}/api/user/GetAllUsers`);
    }
}