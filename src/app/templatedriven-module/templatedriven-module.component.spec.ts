import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenModuleComponent } from './templatedriven-module.component';

describe('TemplatedrivenModuleComponent', () => {
  let component: TemplatedrivenModuleComponent;
  let fixture: ComponentFixture<TemplatedrivenModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedrivenModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrivenModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
