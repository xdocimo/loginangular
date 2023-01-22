// login.component.ts

import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UsersService } from "../users/users.service";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-login",
  templateUrl: "/login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  email: string=""
  password: string=""

  constructor(public userService: UsersService, public router: Router) {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(data => {
      this.userService.setToken(this.email)
      setTimeout(()=>{                           // <<<---using ()=> syntax
        window.location.href = ""
    }, 1000);
    },
    error => {
      alert("Revisar credenciales!")
    });
  }
}