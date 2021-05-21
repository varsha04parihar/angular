import { Address } from "../../src/app/address";

export class User {
    // constructor(
//     public id: number,
//     public fullname: string,
//     public uname: string,
//     public pwd: String,

//     public email: string,
//     public phno:string,
//     public addressLine1:string,
//     public addressLine2:string,
//     public city:string,
//     public state:string,
//     public country:string,
//    public isAdmin:Boolean
    //  )
   // {}
    
     // constructor(
    //     public id: number,
    //     public fullname: string,
    //     public uname: string,
    //     public pwd: String,
    //     public email: string,
    //     public phno:string,
    //     public addressLine1:string,
    //     public addressLine2:string,
    //     public city:string,
    //     public state:string,
    //     public country:string,
    //    public isAdmin:Boolean
    //  )
    // {}
    id: String;
     fullname: String;
     uname: String;
     pwd: String;
    email: String;
     phno: String;
     
     address: Address;
      
     isAdmin: Boolean; 
     constructor(id: String, fullname: String,
        uname: String,
        pwd: String,
   
        email: String,
        phno: String,
        address : Address,
        isAdmin: Boolean)
        {
            this.id=id;
            this.fullname=fullname;
            this.uname=uname;
            this.pwd=pwd;
            this.email=email;
            this.phno=phno;
            this.address=address;
            this.isAdmin=isAdmin

        }
        
    
}