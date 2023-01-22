import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string=""
  password: string=""
  cpassword: string=""
  passwordError: boolean=false

  constructor(public userService: UsersService, public router: Router) {}
  register() {
    if (this.password !== this.cpassword) {
      alert ("Las contraseñas no coinciden...")
    }
    if (this.password.length <= 4) {
      alert ("La contraseña es muy corta.")
    }
    else {
    this.userService.register(this.email, this.password).subscribe(data => {
      this.userService.setToken(this.email)
    })
    this.router.navigateByUrl("");
  }
  }
}
