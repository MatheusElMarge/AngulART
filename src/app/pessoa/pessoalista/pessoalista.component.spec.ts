import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalistaComponent } from './pessoalista.component';

describe('PessoalistaComponent', () => {
  let component: PessoalistaComponent;
  let fixture: ComponentFixture<PessoalistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoalistaComponent]
    });
    fixture = TestBed.createComponent(PessoalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
