import {Component, OnInit} from '@angular/core';
import { HEROES } from 'src/app/heroes/mock-heroes';
import {Hero, hero1} from 'src/app/heroes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './heroes/heroes.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'heroes';


  heroes: Hero[] = HEROES;
   selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
