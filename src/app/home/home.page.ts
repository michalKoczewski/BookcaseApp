import { Component } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  book: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
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
}
