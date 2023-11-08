import { Component, OnInit } from '@angular/core';
import { PROVIDERS} from "../../assets/models/provider.data";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  providers: any = PROVIDERS;

  constructor() { }

  ngOnInit(): void {
  }

}
