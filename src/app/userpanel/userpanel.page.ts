import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.page.html',
  styleUrls: ['./userpanel.page.scss'],
})
export class UserpanelPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public authService: AuthenticationService,
    ) { }

  ngOnInit() {
    }

  back(){
    this.navCtrl.navigateForward('list');
  }

  changePasswd(){
    this.navCtrl.navigateForward('userpassword');
  }

  changeMail(){
    this.navCtrl.navigateForward('useremail');
  }

  changeCity(){
    this.navCtrl.navigateForward('usercity');
  }

  changePersonal(){
    this.navCtrl.navigateForward('userdata');
  }

  /*myOffers(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(5);
    this.slides.lockSwipes(true);
  }

  myFavorite(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(6);
    this.slides.lockSwipes(true);
  }*/

}
