import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAIPNXMLComponent } from './import-aipnxml.component';

describe('ImportAIPNXMLComponent', () => {
  let component: ImportAIPNXMLComponent;
  let fixture: ComponentFixture<ImportAIPNXMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAIPNXMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAIPNXMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
