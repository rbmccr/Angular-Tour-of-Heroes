import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  // Note that the message SERVICE is injected into the hero SERVICE (then -> hero component)
  constructor(private messageService: MessageService) { }
}
