import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAIPNXMLComponent } from './upload-aipnxml.component';

describe('UploadAIPNXMLComponent', () => {
  let component: UploadAIPNXMLComponent;
  let fixture: ComponentFixture<UploadAIPNXMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAIPNXMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAIPNXMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
