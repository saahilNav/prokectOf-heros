import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor( private heroService:HeroService) { }

  ngOnInit():void {
    this.heroService.getHeroes()
    .then(heroes =>{ this.heroes = heroes.slice(1,5)
    console.log("this is data",heroes.slice(1,5))});
  }

}
