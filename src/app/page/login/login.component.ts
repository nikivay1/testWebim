import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStorage } from 'src/classes/user/user.store';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	form: FormGroup = new FormGroup({
		username: new FormControl('',[
			Validators.required,
			Validators.maxLength(50)
		]),
		password: new FormControl('',[
			Validators.required,
			Validators.maxLength(50)
		]),
	});

	constructor(
		private user: UserStorage,
		private router: Router
	){

	};

	submit() {
		if (this.form.valid) {
			this.user.userLogin(this.form.value.username, this.form.value.password).subscribe((isLogged) => {
				if (isLogged) {
					this.router.navigateByUrl('userList')
				}
			})
		}
	};

}
