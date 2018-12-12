import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  token: string;

  constructor(
    private router: Router, 
    public afAuth: AngularFireAuth ) {}

  signupUser(email: string, password: string) {
    /*
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
      */
      this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    /*
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
    */
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.afAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    /*
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token
        }
      )
    return this.token;
    */
    this.afAuth.auth.currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      )

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    //firebase.auth().signOut();
    this.afAuth.auth.signOut();
    this.token = null;
  }

}