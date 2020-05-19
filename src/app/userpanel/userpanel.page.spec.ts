import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserpanelPage } from './userpanel.page';

describe('UserpanelPage', () => {
  let component: UserpanelPage;
  let fixture: ComponentFixture<UserpanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserpanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
