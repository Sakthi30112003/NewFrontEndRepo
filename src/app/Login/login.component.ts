// login.component.ts
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>LeaveApp - Azure AD Login</h1>
      <button (click)="login()">Login with Azure AD</button>
    </div>
  `
})
export class LoginComponent {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginRedirect({scopes: ['api://f5ce4693-a450-4ba9-852d-e0db1a6b248a/access_as_user']});
  }
}
