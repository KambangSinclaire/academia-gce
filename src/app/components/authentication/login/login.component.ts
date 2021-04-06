// import { RequestErrorHandler } from "../../../utilities/errorHandler.utils";
import { UtilitiesService } from "../../../services/utilities.service";
import { CommonUtilities } from "../../../utilities/common.utils";
import { User } from "../../../interfaces/authentication";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private utilService: UtilitiesService
  ) { }


  User: User | any = {};

  userSignUpForm: FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: ["", [Validators.required, Validators.minLength(3)]],
    username: ["", [Validators.required, Validators.minLength(3)]],
    address: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email, Validators.minLength(6)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    cpassword: ["", [Validators.required, Validators.minLength(6)]]
  });

  userForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email, Validators.minLength(6)]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });


  ngOnInit() {
    this.User.username = ' Kambang';
    this.toggleAuthenticationForms('login');
  }


  emailAndPasswordLogin() {
    if (this.userForm.valid) {
      this.firebaseAuth.signInWithEmailAndPassword(this.userForm.controls?.email.value, this.userForm.controls?.password.value).then((user) => {
        console.log(user);
        this.utilService.messageService('success', 'Login successful')
        this.router.navigate(['user/profile/', user.user?.displayName]);
      })
    }
  }


  createUserAccount() {
    this.firebaseAuth.createUserWithEmailAndPassword('', '').then(() => {
      this.utilService.messageService('success', 'Account successfully created')
    })
  }

  gmailLogin() {
    this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      console.log(user);
      this.utilService.messageService('success', 'Login successful')
    });
  }

  logOut() {

  }

  toggleAuthenticationForms(form: any) {
    let loginForm = document.getElementById('login');
    let signInForm = document.getElementById('signIn');

    if (form === 'signIn') {
      signInForm?.classList.contains('hide-form') ? signInForm?.classList.remove('hide-form') : '';
      loginForm?.classList.contains('hide-form') ? '' : loginForm?.classList.add('hide-form');
    } else {
      loginForm?.classList.contains('hide-form') ? loginForm?.classList.remove('hide-form') : '';
      signInForm?.classList.contains('hide-form') ? '' : signInForm?.classList.add('hide-form');
    }
  }
}
