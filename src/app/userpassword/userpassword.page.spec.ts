import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserpasswordPage } from './userpassword.page';

describe('UserpasswordPage', () => {
  let component: UserpasswordPage;
  let fixture: ComponentFixture<UserpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
