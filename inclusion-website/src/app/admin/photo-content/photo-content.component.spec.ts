import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoContentComponent } from './photo-content.component';

describe('PhotoContentComponent', () => {
  let component: PhotoContentComponent;
  let fixture: ComponentFixture<PhotoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
