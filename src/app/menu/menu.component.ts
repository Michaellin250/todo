import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService){



  }

  ngOnInit(){
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
