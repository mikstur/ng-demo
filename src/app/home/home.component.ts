import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.firebaseAuth.user.subscribe((user) => {
      console.log("User: ", user);
      if (user) {
        this.router.navigate(["tasks"]);
      }
    });

    this.firebaseAuth.signInWithEmailAndPassword("miki@ixperience.co.za", "qwerty").then(user => {
      console.log("User logged in");
    });

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setInterval(() => {
    //     subscriber.next(4);
    //     // subscriber.complete();
    //   }, 1000);
    // });

    // observable.subscribe(data => {
    //   console.log("Data: ", data);
    // })
  }

}
