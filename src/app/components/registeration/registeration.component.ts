import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Address } from '../../address';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
address:Address=new Address('','','','','','');
  user: User = new User('','','','','','',this.address,false);
  submitted = false;


  
  constructor(private userService: UserService,
    private router: Router) { }
  
    public model: any;
  ngOnInit(): void {
    var codevalue="GAMQZP@66PQZ";
    //this.model = this.user;
    
  }
  
  @ViewChild("myNameElem")
  myNameElem!: ElementRef;
  
  getValue() {
    var cv=this.myNameElem.nativeElement.value;
    if(cv=="GAMQZP@66PQZ")
   {
       alert("Authentication code is correct. You have the Admin Privilege");
       console.log(this.myNameElem.nativeElement.value);
     }
     else
     {
       alert("Wrong Authentication code. You dont have the Admin Privilege. Please uncheck the checkbox!");
     }

    console.log(this.myNameElem.nativeElement.value);
  }
  // onEnter() 
  // {
  //   var codevalue="GAMQZP@66PQZ";
  //   var cv=document.getElementById("code");
  //   if(document.getElementById("code")==codevalue)
  //   {
  //     alert("Authentication code is correct. You have the Admin Privelage");
  //   }
  //   else
  //   {
  //     alert("Wrong Authentication code. You dont have the Admin Privilage. Please uncheck the checkbox!");
  //   }
 
    
  // }
  // onEnter(value: string)
  //  { 
  //   if(value=="GAMQZP@66PQZ")
  //   {
  //     alert("Authentication code is correct. You have the Admin Privelage");
  //   }
  //   else
  //   {
  //     alert("Wrong Authentication code. You dont have the Admin Privilage. Please uncheck the checkbox!");
  //   }
  //  }


/*
  validateCode()
  {
    var codevalue="GAMQZP@66PQZ";
    if(codevalue==code)
    {
      alert("Authentication code is correct. You have the Admin Privelage");
    }
    else
    {
      alert("Wrong Authentication code. You dont have the Admin Privilage. Please uncheck the checkbox!");
    }
  }
  /*

  public invalidPassword: boolean | undefined;
  
  passwordFails(checks: boolean[]): boolean {
    let counter = 0;
   for (let i = 0; i < checks.length; i++) {
     if (checks[i]) {
       counter += 1;
     }
   }
   return counter < 2;
}
  validatePassword(pwd: string) {
    let hasLower = false;
    let hasUpper = false;
    let hasNum = false;
    let hasSpecial = false;

    const lowercaseRegex = new RegExp("(?=.*[a-z])");// has at least one lower case letter
    if (lowercaseRegex.test(pwd)) {
      hasLower = true;
    }

    const uppercaseRegex = new RegExp("(?=.*[A-Z])"); //has at least one upper case letter
    if (uppercaseRegex.test(pwd)) {
      hasUpper = true;
    }

    const numRegex = new RegExp("(?=.*\\d)"); // has at least one number
    if (numRegex.test(pwd)) {
      hasNum = true;
    }

    const specialcharRegex = new RegExp("[!@#$%^&*(),.?\":{}|<>]");
    if (specialcharRegex.test(pwd)) {
      hasSpecial = true;
    }

    this.invalidPassword = this.passwordFails([hasLower, hasUpper, hasNum, hasSpecial]);
  }
  */

  // newUser(): void {
  //   this.submitted = false;
  //   this.user = new User();
  // }

  saveUser(){
    this.userService.addUserDetails(this.user).subscribe( data =>{
      console.log(data);
      alert("You have registered successfully !!!!");
      //this.goToUserList();
    },
    (error: Response) => {  
      if(error.status === 200)  
        alert('Registeration Successful');  
      else {  
        alert('Email id already exist. Try with other email Id !!!!');  
        console.log(error);  
      }  
    });  
   
  }

  
  // onSubmit() {
  //   this.submitted = true;
  //   this.saveUser();    
  // }

  goToUserList(){
    this.router.navigate(['/findAllUser']);
  }
  
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
    
  }

}
