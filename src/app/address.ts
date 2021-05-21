export class Address {
    // aid:String;
      addressLine1: String;
      addressLine2: String;
      city: String;
      pinCode:String;
      state: String;
      country: String; 
       
      constructor(
          //aid :String,
         addressLine1: String,
         addressLine2: String,
         city: String,
         pinCode:String,
         state: String,
         country: String,)
         {
             //this.aid=aid;
             this.addressLine1=addressLine1;
             this.addressLine2=addressLine2;
             this.city=city;
             this.pinCode=pinCode;
             this.state=state;
             this.country=country;
 
         }
 }