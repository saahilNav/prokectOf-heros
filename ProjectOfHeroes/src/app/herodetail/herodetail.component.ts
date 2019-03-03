import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  hero: Hero;
  private id: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let url = this.route.url;
    this.route.params
      .subscribe((params: any) => { 
        if (params) {
          this.id = params.id;
          debugger; 
        }
    });
  }
  // this.route.paramMap
  //     .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
  //     .subscribe(hero => this.hero = hero);
  // }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}
