import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { User } from 'src/app/user';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {
  address:Address=new Address('','','','','','');
  user: User = new User('60a4e12a33443d31ce01641e','','','','','',this.address,false);
  //id: String | undefined;
  
 
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.user.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.user.id).subscribe((data: User) => {
      this.user = data;
      console.log(data);
    }, (error: any) => console.log(error));
  }
  

  
  deleteUser(id: String){

    this.userService.deleteUser(this.user.id).subscribe( (data: any) => {
      console.log(data);
     // alert("User deleted");
      //this.getEmployees();
    }
    ,(error: Response) => {  
     
      if(error.status === 200)  
        alert('User Successfully Deleted !!!');  
      else if(this.user.id==null)
      {
        alert("User Id cannot be Null");
      } 
      else
      {  
        alert('Issues deleting the User!!!  Please Try again.');  
        console.log(error);  
      }  
    }); 
  }
  
}
