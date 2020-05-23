import { Component, OnInit } from "@angular/core";
import { Book } from "../shared/book.model";
import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { FileSizeFormatPipe } from "./file-size-format.pipe";

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}
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
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private database: AngularFirestore
  ) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>("Books");
    this.images = this.imageCollection.valueChanges();
  }

  ngOnInit() {}

  async addBook() {
    let loader = this.loadingCtrl.create({
      message: "Please wait",
    });
    (await loader).present();

    try {
      await this.firestore.collection("book").add(this.book);
    } catch (e) {
      this.showToast(e);
      console.log(e);
    }

    (await loader).dismiss();

    this.navCtrl.navigateRoot("home");
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  uploadFile(event: FileList) {
    // The File object
    const file = event.item(0);

    // Validation for Images Only
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    this.isUploading = true;
    this.isUploaded = false;

    this.fileName = file.name;

    // The storage path
    const path = `book/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: "book" };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(
          (resp) => {
            this.addImagetoDB({
              name: file.name,
              filepath: resp,
              size: this.fileSize,
            });
            this.isUploading = false;
            this.isUploaded = true;
          },
          (error) => {
            console.error(error);
          }
        );
      }),
      tap((snap) => {
        this.fileSize = snap.totalBytes;
      })
    );
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection
      .doc(id)
      .set(image)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }
}
