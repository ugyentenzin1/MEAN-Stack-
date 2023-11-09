import { Component, OnInit } from '@angular/core';
import {Providers} from "../../models /providers";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PROVIDERS} from "../../models /data-providers";
import {ProvidersService} from "../../services /providers.service";

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.scss']
})
export class AddProvidersComponent implements OnInit {

  submitted = false;
  provider:Providers = new Providers();
  providersForm!: FormGroup;
  providers = PROVIDERS;


  dataProviders!: Providers;
  constructor(private providerServices: ProvidersService) { }

  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname: new FormControl('',[Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.max(20)]),
      position: new FormControl('', [Validators.required, Validators.pattern('')]),
      company_name: new FormControl('', [Validators.required]),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[2-9]{3}-[0-9]{4}-[0-9]{5}$')]),
      email: new FormControl('',[ Validators.required]),
      description: new FormControl(),
      tagline: new FormControl(),
    })

  }

  get f() {
    return this.providersForm.controls;
  }

  handleSubmit() : void {

    console.log(this.providersForm.value)

    //new Id
    let newId = Math.floor(Math.random() + 10000- 9999 * 9999)
    console.log(newId)
    let response = this.providersForm.value;
    this.provider.id = newId;
    this.provider.firstname = response.firstname;
    this.provider.lastname = response.lastname;
    this.provider.position = response.position;
    this.provider.company = {
      company_name : response.company_name,
      email : response.email,
      address : response.address,
      address2 : response.address2,
      phone : response.phone,
      postal_code : response.postal_code,
      tagline : response.tagline,
      description : response.description,
      city: response.city,
      state: response.state
    }

    this.providers.push(this.provider);
    this.submitted = true;


    console.log(this.providers)



  }
}
