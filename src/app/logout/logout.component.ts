import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  ngOnInit() {
    this.getLogout()
  }

  getLogout() {
    var test = this.userService.getToken
    this.userService.logout(test) 
    setTimeout(()=>{                           // <<<---using ()=> syntax
      window.location.href = ""
  }, 1000);
  }

  constructor(public userService: UsersService) {
  }

}
