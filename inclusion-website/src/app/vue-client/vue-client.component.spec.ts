import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueClientComponent } from './vue-client.component';

describe('VueClientComponent', () => {
  let component: VueClientComponent;
  let fixture: ComponentFixture<VueClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
