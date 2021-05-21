import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  address:Address=new Address('','','','','','');
  user: User = new User('60a73989bbf8ab193dce7c5d','','','','','',this.address,false);
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

  onSubmit(){
    this.userService.updateUser(this.user.id, this.user).subscribe( (data: any) =>{
     // this.goToUserList();
     this.router.navigate(['/findAllUsers']);
     console.log(data);
     alert("User profile Updated");
    }
    , (error: any) => console.log(error));
  }

}