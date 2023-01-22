// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(email: any, password: any): Observable<any> {
    var userx:any = {}
    userx = { email: email, password: password }
    console.log(userx)
    return this.http.post("http://localhost:4200/login1", userx);
  }

  register(email: any, password: any): Observable<any> {
    var userx:any = {}
    userx = { email: email, password: password }
    console.log(userx)
    return this.http.post("http://localhost:4200/register1", userx)
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token")
  }

  logout(token: any) {
    this.cookies.delete("token");
  }

  getUser() {
    var tokenx = this.cookies.get("token")

    if(tokenx) {
      return this.http.post("http://localhost:4200/user1", {email: tokenx});
    }
    else {
      return this.http.post("http://localhost:4200/user1", {email: tokenx});
    }
    }

  getUserLogged() {
    const token = this.getToken();
  }
}
