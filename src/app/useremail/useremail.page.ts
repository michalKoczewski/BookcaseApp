import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-useremail',
  templateUrl: './useremail.page.html',
  styleUrls: ['./useremail.page.scss'],
})
export class UseremailPage implements OnInit {

  user = {} as User;
  userid: any;

  constructor(
    private navCtrl: NavController,
    private ngFireAuth: AngularFireAuth,
    private database: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async getid(){
    this.userid = (await this.ngFireAuth.currentUser).uid;
  }

  userpanel(){
    this.navCtrl.navigateForward("userpanel")
  }

  async changemail(user: User) {
    this.getid();
    (await this.ngFireAuth.currentUser).updateEmail(user.email)
    .then(() => {
      this.database.collection('users').doc(this.userid).set({email: this.user.email});
      this.navCtrl.navigateForward("userpanel")
    });
  }

}