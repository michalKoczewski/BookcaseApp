import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: "app-userpassword",
  templateUrl: "./userpassword.page.html",
  styleUrls: ["./userpassword.page.scss"],
})
export class UserpasswordPage implements OnInit {
  user: any;
  credential: any;
  areEqual: boolean;
  constructor(
    private navCtrl: NavController,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = this.ngFireAuth.currentUser;
  }

  userpanel() {
    this.navCtrl.navigateForward("userpanel");
  }

  async resetPassword(password: string, password2: string) {
    if (password == password2) {
      (await this.ngFireAuth.currentUser)
        .updatePassword(password)
        .then(() => {
          this.navCtrl.navigateForward("userpanel");
        })
        .catch((error) => {
          window.alert(error.message);
        });
    } else {
      window.alert("hasła różnią się od siebie");
    }
  }
}
