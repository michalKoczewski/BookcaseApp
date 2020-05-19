import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, IonSlide, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit{
    constructor(private menu: MenuController, private navCtrl: NavController) { }


    @ViewChild("theSlides", null) slides: IonSlides;

    ngOnInit() {
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
        }

    moveToBook() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }

    movetoList() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    openEnd() {
        this.menu.open('end');
    }

    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }

    navigateToUserPanel(){
        this.navCtrl.navigateForward('userpanel');
      }

    newOffer(){
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true); 
    }

    backInside(){
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
      }

  
}
