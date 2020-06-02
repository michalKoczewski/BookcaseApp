import { Component, OnInit } from "@angular/core";
import { Book } from "../shared/book.model";
import { ToastController, LoadingController, NavController } from "@ionic/angular";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { FileSizeFormatPipe } from "./file-size-format.pipe";
import { AngularFireAuth } from "@angular/fire/auth";



export interface MyData { name: string; filepath: string; size: number; }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: AddBookPage,
      },
    ]),
  ],
  declarations: [AddBookPage, FileSizeFormatPipe],
})
@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.page.html",
  styleUrls: ["./add-book.page.scss"],
})
export class AddBookPage implements OnInit {
  book = {} as Book;
  userid: string;
  show: boolean;

  // Upload Task
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details
  fileName: string;
  fileSize: number;

  //Status check
  isUploading: boolean;
  isUploaded: boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    public ngFireAuth: AngularFireAuth
  ) 
  {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>("Books");
    this.images = this.imageCollection.valueChanges();
  }

  async ngOnInit() {
    this.show = false;
    this.userid = (await this.ngFireAuth.currentUser).uid;
  }

  async addBook() {
    this.book.zdjecie = this.book.zdjecie;//.substr(this.book.zdjecie.lastIndexOf('\\') + 1);
    this.book.owner = this.userid;
    let loader = this.loadingCtrl.create({
      message: "Please wait",
    });
    (await loader).present();
    try {
      await this.database.collection("book").add(this.book);
    } catch (e) {
      this.showToast(e);
      console.log(e);
    }

    (await loader).dismiss();

    this.navCtrl.navigateRoot("list");
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
  
  //dodawanie do storage
  uploadFile(event: FileList) {
    // The File object
    const file = event.item(0);

    // Validation for Images Only
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    this.fileName = file.name;

    // The storage path
    const path = `book/${this.fileName}`;

    // Totally optional metadata
    const customMetadata = { app: "book" };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
  }

  back(){
    this.navCtrl.back();
  }

  showInput(item){
    if(item == "Sprzedaz"){
      this.show = true;
    }
    else if(item == "Wymiana"){
      this.show = false;
      this.book.cena = "Wymiana";
    }
  }
}
