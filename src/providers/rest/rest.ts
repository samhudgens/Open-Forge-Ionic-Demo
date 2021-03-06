import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "https://api.github.com";


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  getAllUsers(since) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/users?since="+since).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserByLogin(login) {
    return new Promise(resolve => {
      // Old search query string: (this.apiUrl+"/search/users?q="+login+"+in:login")
      this.http.get(this.apiUrl+"/users/"+login).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      })
    })
  }

}


// getNumberOfRepos() {
//   return new Promise(resolve => {
//     this.http.get(this.apiUrl+"/users/samhudgens/repos").subscribe(data => {
//       resolve(data);
//     }, err => {
//       console.log(err);
//     });
//   });
// }


// getAllUsers() {
//   return new Promise(resolve => {
//     this.http.get(this.apiUrl+"/users").subscribe(data => {
//       resolve(data);
//       // console.log(this.http.head(this.apiUrl+"/users"));
//     }, err => {
//       console.log(err);
//     });
//   });
// }

// getUser(username) {
//   return new Promise(resolve => {
//     this.http.get(this.apiUrl+`/users/${username}`).subscribe(data => {
//       resolve(data);
//     }, err => {
//       console.log(err);
//     });
//   });
// }

// addUsersOnScroll() {
//   this.userListCounter = 30;
//   return new Promise(resolve => {
//     console.log(this.apiUrl+"/users?since="+this.userListCounter);
//     this.http.get(this.apiUrl+"/users?since="+this.userListCounter)
//     .subscribe(data => {
//       resolve(data);
//       this.userListCounter += 30;
//       console.log(this.apiUrl+"/users?since="+this.userListCounter);
//     }, err => {
//       console.log(err);
//     });
//   });
// }
