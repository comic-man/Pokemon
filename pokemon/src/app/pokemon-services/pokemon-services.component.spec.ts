import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonServicesComponent } from './pokemon-services.component';

describe('PokemonServicesComponent', () => {
  let component: PokemonServicesComponent;
  let fixture: ComponentFixture<PokemonServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
