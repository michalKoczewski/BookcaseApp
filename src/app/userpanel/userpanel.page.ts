import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, IonSlide, NavController } from "@ionic/angular";

@Component({
  selector: "app-userpanel",
  templateUrl: "./userpanel.page.html",
  styleUrls: ["./userpanel.page.scss"],
})
export class UserpanelPage implements OnInit {
  @ViewChild("slidesUserPanel", null) slides: IonSlides;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  backInside() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  changePasswd() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  changeMail() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  changeCity() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }

  changePersonal() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(4);
    this.slides.lockSwipes(true);
  }

  myOffers() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(5);
    this.slides.lockSwipes(true);
  }

  myFavorite() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(6);
    this.slides.lockSwipes(true);
  }
}
