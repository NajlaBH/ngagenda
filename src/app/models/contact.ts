export class Contact{
    contactid:number;
    fullname:string;
    email:string;
    phone:string;
    address: string;

    constructor(
	contactid:number,
        fullname:string,
        email:string,
	phone:string,
        address: string
     ){
	this.contactid = contactid;
        this.fullname = fullname;
        this.email = email;
	this.phone = phone;
        this.address = address;
        
    }
}
