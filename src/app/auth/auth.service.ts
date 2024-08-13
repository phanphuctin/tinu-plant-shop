import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    constructor(private _http: HttpClient) { }

    BASE_URL = 'http://localhost:3000';

    // isIdenticated = signal(false);
    // isIdenticated = new BehaviorSubject(false);
    // isIdenticated$ = this.isIdenticated.asObservable();
    isIdenticated = false

    setUserIdenticated(value) {
        // this.isIdenticated.set(value);
        this.isIdenticated = value
    }

    getUserIdentication() {
        return this.isIdenticated
    }

    register(usersData: any): Observable<any> {
        return this._http.post(`${this.BASE_URL}/users`, usersData)
    }

    login(): Observable<any> {
        return this._http.get(`${this.BASE_URL}/users`)
    }

    loginExecute(userInfor) {
        if (userInfor.length > 0) {
            this.isIdenticated = true;
            console.log(`%c  treee= `, `background-color: yellow`, this.isIdenticated)
        }
    }
}