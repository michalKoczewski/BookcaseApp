import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  navigateToLogin() {
    this.navCtrl.navigateForward("login");
  }

  navigateToRegister() {
    this.navCtrl.navigateForward("register");
  }

  navigateToUserPanel() {
    this.navCtrl.navigateForward("userpanel");
  }

  navigateToList() {
    this.navCtrl.navigateForward("products");
  }
}
