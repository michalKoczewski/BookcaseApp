import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { ToastController, NavController } from "@ionic/angular";
import { User } from "../shared/user";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"],
})
export class RegistrationPage implements OnInit {
  user = {} as User;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        this.router.navigate(["login"]);
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }

  back() {
    this.navCtrl.back();
  }
}
