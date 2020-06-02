import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-usercity',
  templateUrl: './usercity.page.html',
  styleUrls: ['./usercity.page.scss'],
})
export class UsercityPage implements OnInit {

  user = {} as User;
  userid: any;

  constructor(
    private navCtrl: NavController,
    private database: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
  ) { }

  async ngOnInit() {
    this.userid = (await this.ngFireAuth.currentUser).uid;
  }

  userpanel(){
    this.navCtrl.navigateForward("userpanel")
  }

  async changecity(user: User) {
    this.database.collection('users').doc(this.userid).update(user).then(() => {
      this.navCtrl.navigateForward("userpanel");
    });
  }

}
