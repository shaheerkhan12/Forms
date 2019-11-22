import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformModuleComponent } from './reactiveform-module.component';

describe('ReactiveformModuleComponent', () => {
  let component: ReactiveformModuleComponent;
  let fixture: ComponentFixture<ReactiveformModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
