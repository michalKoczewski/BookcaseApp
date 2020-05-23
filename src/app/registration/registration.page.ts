import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        this.authService.SendVerificationMail();
        this.router.navigate(["verify-email"]);
      })
      .catch((e) => {
        window.alert(e.message);
      });
  }
}
