import { TestBed } from '@angular/core/testing';

import { PokemonSerivceService } from './pokemon-serivce.service';

describe('PokemonSerivceService', () => {
  let service: PokemonSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
