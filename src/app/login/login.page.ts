import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  email: string = "";
  password: string = "";
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  navigateToRegister() {
    this.navCtrl.navigateForward("register");
  }

  back() {
    this.navCtrl.back();
  }

  async loginUser(): Promise<void> {
    alert(this.email + " " + this.password);
    this.authService.loginUser(this.email, this.password).then(
      () => {
        this.navCtrl.navigateForward("home");
      },
      async (error) => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: "Ok", role: "cancel" }],
        });
        await alert.present();
      }
    );
  }
}
