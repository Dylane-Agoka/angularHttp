import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }

  onGetUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done getting users')
      );
  }

  onGetUser(): void {
    this.userService.getUser()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done getting user')
      );
  }
}
