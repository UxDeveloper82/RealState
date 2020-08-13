import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }

  // tslint:disable-next-line: typedef
  createRegisterationForm() {
      this.registerationForm = this.fb.group({
          userName: [null, Validators.required],
          email: [null, [Validators.required, Validators.email]],
          password: [null, [Validators.required, Validators.minLength(8)]],
          confirmPassword: [null, [Validators.required]],
          mobile: [null, [Validators.required, Validators.maxLength(10)]]
      }, {validators: this.passwordMatchingValidatior});
  }

  passwordMatchingValidatior(fb: FormGroup): Validators {
     return fb.get('password').value === fb.get('confirmPassword').value ? null :
      {notmatched: true};
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
     console.log(this.registerationForm.value);
     this.userSubmitted = true;

     if (this.registerationForm.valid) {
       this.userService.addUser(this.userData());
       this.onReset();
       this.alertify.success('Congrats, you are successfully registered');
     }else {
       this.alertify.error('Kindly provide the required fields');
     }
  }
  // tslint:disable-next-line: typedef
  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }

    // -------------------------------
   // Get methods for all form controls
   // --------------------------------
  // tslint:disable-next-line: typedef
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
   // tslint:disable-next-line: typedef
   get email() {
    return this.registerationForm.get('email') as FormControl;
  }

   // tslint:disable-next-line: typedef
   get password() {
    return this.registerationForm.get('password') as FormControl;
  }
    // tslint:disable-next-line: typedef
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
    // tslint:disable-next-line: typedef
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
}
