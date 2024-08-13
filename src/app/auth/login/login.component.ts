import { CommonModule } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormControlComponent, NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, NzCheckboxModule, NzInputModule, ReactiveFormsModule, NzGridModule, NzButtonModule, NzFormItemComponent, NzFormControlComponent, NzInputGroupComponent],
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }>
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this._authService.login()
        .pipe(takeUntilDestroyed(this._destroyRef)).subscribe(data => {
          console.log(`%cdata = `, `background-color: yellow`, data)
          data = data.filter(user => user.name === this.validateForm.value.userName && user.password === this.validateForm.value.password)
          if (data.length > 0) {
            localStorage.setItem('user_infor', JSON.stringify(data || {}))
            this._router.navigate(['dashboard/welcome'])
            const user = this._authService.loginExecute(data);
            console.log(`%c user = `, `background-color: yellow`, user)
            this._message.success(`You are log in successfully, Welcome !`)

          } else {
            this._message.error('Invalid Username or Password')
          }
          // const {data} = data;
        })
      // const user = ;

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder,
    private _authService: AuthService,
    private _destroyRef: DestroyRef,
    private _router: Router,
    private _message: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });

    const alreadyLogin = localStorage.getItem('user_infor');
    const parsed = JSON.parse(alreadyLogin)
    if (alreadyLogin?.length) {
      this._router.navigate(['dashboard'])
    } else {
      console.log(`Please log in = `,)
      return
    }
  }

  test() {
    console.log(`%cthis._authService.getUserIdentication(); = `, `background-color: yellow`, this._authService.getUserIdentication())
  }
}
