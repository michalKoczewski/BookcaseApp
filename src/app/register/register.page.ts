import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage {
  email: string = "";
  password: string = "";
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  back() {
    this.navCtrl.back();
  }

  async createUser(): Promise<void> {
    alert(this.email + " " + this.password);
    this.authService.createUser(this.email, this.password).then(
      () => {
        this.navCtrl.navigateRoot("login");
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
