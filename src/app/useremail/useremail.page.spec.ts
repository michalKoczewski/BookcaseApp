import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseremailPage } from './useremail.page';

describe('UseremailPage', () => {
  let component: UseremailPage;
  let fixture: ComponentFixture<UseremailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseremailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseremailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
