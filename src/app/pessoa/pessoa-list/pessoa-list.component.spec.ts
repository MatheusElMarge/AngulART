import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalistComponent } from './pessoa-list.component';

describe('pessoalistComponent', () => {
  let component: PessoalistComponent;
  let fixture: ComponentFixture<PessoalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoalistComponent]
    });
    fixture = TestBed.createComponent(PessoalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
