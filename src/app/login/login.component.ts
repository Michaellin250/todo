import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = "in28minutes";
  password= "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router:Router, public hardcodedAuthenticationService: HardcodedAuthenticationService){
    
  }

  handleLogin(){
    //console.log(this.username);

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else{
      this.invalidLogin = true;
    }
    

  }

}
