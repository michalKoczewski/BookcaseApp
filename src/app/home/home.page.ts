import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    public authService: AuthenticationService,
    public ngFireAuth: AngularFireAuth
    ) {}

  async navigateToLogin(){
    if(this.authService.isLoggedInx().valueOf() == true){
      this.navCtrl.navigateForward('userpanel');
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('login');
    }
  }

  async navigateToRegister(){
    if(this.authService.isLoggedInx().valueOf() == true){
      this.navCtrl.navigateForward('userpanel');
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('registration');
    }
  }

  async navigateToUserPanel(){
    if(this.authService.isLoggedInx().valueOf() == true){
      this.navCtrl.navigateForward('userpanel');
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('login');
    }
  }

  navigateToList(){
    this.navCtrl.navigateForward('list');
  }
}
