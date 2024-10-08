import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FournisseurComponent } from './Fournisseur.component';


describe('FournisseurComponent', () => {
  let component: FournisseurComponent;
  let fixture: ComponentFixture<FournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
