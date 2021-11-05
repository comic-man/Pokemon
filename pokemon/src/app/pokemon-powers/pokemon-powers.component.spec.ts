import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPowersComponent } from './pokemon-powers.component';

describe('PokemonPowersComponent', () => {
  let component: PokemonPowersComponent;
  let fixture: ComponentFixture<PokemonPowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonPowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
