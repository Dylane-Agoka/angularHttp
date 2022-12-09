import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private user: User = {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (response) => console.table(response),
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

  onCreateUser(): void {
    this.userService.createUser(this.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done Creating user')
      );
  }
}
