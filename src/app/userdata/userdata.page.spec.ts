import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserdataPage } from './userdata.page';

describe('UserdataPage', () => {
  let component: UserdataPage;
  let fixture: ComponentFixture<UserdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
