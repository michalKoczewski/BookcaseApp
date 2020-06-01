import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  navigateToRegister() {
    this.router.navigate(["registration"]);
  }

  back(){
    this.navCtrl.back();
  }

  changePasswd(){
    this.navCtrl.navigateForward('userpassword');
  }

  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
          this.router.navigate(["list"]);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
