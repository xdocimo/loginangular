// src/app/home/home.component.ts

import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  latIng: any = ""
  ngOnInit() {
    this.getUserLogged()
  }


  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      this.latIng = user
    });


  }

  constructor(public userService: UsersService) {
  }
}