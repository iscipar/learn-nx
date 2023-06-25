import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'learn-nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'learn-nx';
  signedIn: boolean = false;
  @Output() onLogout: EventEmitter<any> = new EventEmitter();

  logOut(): void {
    this.onLogout.emit({ message: 'return to home page' });
  }
}
