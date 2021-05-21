import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user'
import { UserService } from '../../user.service';
import { LoginService } from '../../login.service';
import { Login } from 'src/app/login';

import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService ,
    private router: Router) { }
  
 // credentials = {uname: '', pwd: ''};
  ngOnInit(): void {
  }

  returnUrl!: string;
  
  login =new Login('','');
 
  loginCheck() {
    this.loginService.loginUserFromRemote(this.login).subscribe( data =>{console.log(data);
      alert("You have logged in successfully !!!!");

    },
    (error: Response) => {  
      if(error.status === 200)  
        alert('Login Successful'); 
       // link(UpdateProfileComponent); 
      else {  
        alert('Wrong credentials !!!! check username and password');  
        console.log(error);  
      }  
    });  
   
    // this.loginService.login(uname,pwd).subscribe( data =>{
    //   console.log(data);
    //   alert("You have logged in successfully !!!!");
    //   //this.goToUserList();
    // },
    // error => console.log(error));
  }
  


  //any { uname, pwd } = this.form;
  /*
  checkUser(){
    this.loginService.login(uname,pwd).subscribe( data =>{
      console.log(data);
      alert("You have logged in successfully !!!!");
      //this.goToUserList();
    },
    error => console.log(error));
  }
*/
  onSubmit(){
    console.log(this.login);
    this.loginCheck();
    
  }
}
