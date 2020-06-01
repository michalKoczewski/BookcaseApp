import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-usercity',
  templateUrl: './usercity.page.html',
  styleUrls: ['./usercity.page.scss'],
})
export class UsercityPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  userpanel(){
    this.navCtrl.navigateForward("userpanel")
  }

}
