import { Component, OnInit } from '@angular/core';
import {PROVIDERS} from "../models /data-providers";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent {

  providers= PROVIDERS;

  constructor() {
  }
}
