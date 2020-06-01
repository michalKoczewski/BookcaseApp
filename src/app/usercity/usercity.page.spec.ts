import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsercityPage } from './usercity.page';

describe('UsercityPage', () => {
  let component: UsercityPage;
  let fixture: ComponentFixture<UsercityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsercityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
