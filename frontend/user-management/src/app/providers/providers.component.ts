import { Component, OnInit } from '@angular/core';
import {ProvidersService} from "../services /providers.service";
import {Providers} from "../models /providers";
import {pipe} from "rxjs";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  providers!: Providers[]

  constructor(private providerService: ProvidersService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.getProviders().subscribe(value =>
    this.providers = value
    );
  }
}
