import { Component, NgZone } from "@angular/core";
import { LoadingController, ToastController, NavController, IonSlides } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { Book } from "../shared/book.model";
import { Router } from "@angular/router";
import { NavigationExtras } from '@angular/router';
import { User } from "../shared/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseApp } from "@angular/fire";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: "app-home",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"],
})
export class ListPage {
  book: any;
  detbook = {} as Book;
  userdatabase = {} as User;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
  ) {}

  ionViewWillEnter() {
    this.getBooks();
  }

  async getBooks() {
    let loader = this.loadingCtrl.create({
      message: "Please wait",
    });
    (await loader).present();

    try { 
      this.firestore
        .collection("book")
        .snapshotChanges()
        .subscribe((data) => {
          this.book = data.map((e) => {
            return {
              id: e.payload.doc.id,
              tytul: e.payload.doc.data()["tytul"],
              autor: e.payload.doc.data()["autor"],
              cena: e.payload.doc.data()["cena"],
              stan: e.payload.doc.data()["stan"],
              opis: e.payload.doc.data()["opis"],
              miasto: e.payload.doc.data()["miasto"],
              zdjecie: e.payload.doc.data()["zdjecie"]
            };
          });
        });

      (await loader).dismiss();
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteBook(id: string) {
    let loader = this.loadingCtrl.create({
      message: "Please wait",
    });
    (await loader).present();

    await this.firestore.doc("book/" + id).delete();

    (await loader).dismiss();
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  newOffer(){
    if(this.authService.isLoggedInx().valueOf() == true){
      this.navCtrl.navigateForward('add-book');
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('login');
    }
  }

  moveToBook(detbook){
    if(this.authService.isLoggedInx().valueOf() == true){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          book: detbook
        }
      };
      this.navCtrl.navigateForward('book-details', navigationExtras);
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('login');
    }
  }

  async navigateToUserPanel(){
    if(this.authService.isLoggedInx().valueOf() == true){
      this.navCtrl.navigateForward('userpanel');
    }
    else if (this.authService.isLoggedInx().valueOf() == false){
      this.navCtrl.navigateForward('login');
    }
  }
}
