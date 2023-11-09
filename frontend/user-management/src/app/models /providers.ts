export interface Company {
  company_name: string;
  email: string;
  address: string;
  address2: string;
  phone: string;
  postal_code: string;
  tagline: string;
  description: string;
  city: string
  state:string;
}

export class Providers {
  // id?: number;
  // firstname?: string;
  // lastname?: string;
  // position?: string;
  // company? : {
  //   address: string;
  //   address2: string;
  //   phone: string;
  //   company_name: string;
  //   tagline: string;
  //   description: string;
  //   postal_code: string;
  //   email: string;


  //should follow this
  constructor(public id?: number, public firstname?:string, public lastname?:string,
              public position?:string, public company?:Company) {
    this.id = this.firstname = this.lastname = this.company = undefined;
  }

}


