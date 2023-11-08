import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management';

  message! : string;

  array: any = ['ugyen','ugye', 'tenzin']

  clickMe(val: string) {
    this.message = val
  }
}
