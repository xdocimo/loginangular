import { Component } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent {
  latIng?: any
  ngOnInit() {
    this.getUserLogged()
  }


  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user)
      this.latIng = user
      console.log(this.latIng)
    });


  }

  constructor(public userService: UsersService) {
  }
}