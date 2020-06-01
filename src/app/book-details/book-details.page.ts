import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Book } from "../shared/book.model";
import { ActivatedRoute } from '@angular/router';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../shared/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  book = {} as Book;
  
    constructor(
    private navCtrl : NavController,
    private route: ActivatedRoute,
    private database: AngularFirestore,
    public ngFireAuth: AngularFireAuth
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.book = params["book"]
  });
  console.log(this.book.test);
  }

  movetoList(){
    this.navCtrl.back();
  }
}
