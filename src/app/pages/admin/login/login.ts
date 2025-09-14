import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router){}
  onLogin(){
    if(this.loginObj.userName == 'admin' && this.loginObj.password == '123456'){ 
      this.router.navigateByUrl('/products')
    } else {
      alert('Wrong Credentials')
    }
  }
}
