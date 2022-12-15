import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private user: User = {
    id: 5,
    name: 'Junior Graham'
  };

  constructor(private userService: UserService) {
    // Understand Observables with RxJS
    type HttpResponse = { code: number, data: string };

    const observable = new Observable<HttpResponse>(subscriber => {
      console.log('Inside subscriber');
      subscriber.next({ code: 200, data: 'this is data 1...' });
      subscriber.next({ code: 200, data: 'this is data 2...' });
      subscriber.next({ code: 200, data: 'this is data 3...' });
      // subscriber.error({ code: 500, message: 'An error occurred' });
      setTimeout(() => {
        subscriber.next({ code: 200, data: 'this is data more data...' });
        subscriber.complete();
      }, 3 * 1000);
      console.log('subscriber is done emitting...');
    });

    observable.subscribe({
      next(response: HttpResponse) {
        console.log('got Response: ', response);
      },
      error(error: any) {
        console.error('something wrong occurred: ', error);
      },
      complete() {
        console.log('done');
      }
    });
  }

  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    this.onPatchUser();
    this.onDeleteUser();
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

  onUpdateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done Updating user')
      );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done Patching user')
      );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(this.user.id as number)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
        () => console.log('Done Deleting user')
      );
  }
}
