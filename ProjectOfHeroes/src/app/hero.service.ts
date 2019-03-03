import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_BASE_HREF } from '@angular/common';
import { log } from 'util';


@Injectable()
export class HeroService {
  update(hero: Hero): any {
    throw new Error("Method not implemented.");
  }

  private headers = new HttpHeaders ({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http:HttpClient) {
  }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(response => response  as Hero[])
    .catch(this.handleError);
}



  // getHero(id: number): Promise<Hero> {
  //   console.log("runing process")
  //   let url =(this.heroesUrl+"/"+id);
  //   return this.http.get<Hero>(url)
  //   .toPromise()
  //   .then(response =>{ response as Hero;
  //   console.log("ddgdhg")})
  //   .catch(this.handleError);  
  // }

    // getHero<Data>(id: number): Observable<Hero> {
    //   const url = `${this.heroesUrl}/id=${id}`;
    //   return this.http.get<Hero[]>(url)
    //     .pipe(
    //       map(heroes => heroes[1]), // returns a {0|1} element array
    //       tap(h => {
    //         const outcome = h ? `fetched` : `did not find`;
    //         console.log("this");
    //           log(`${outcome} hero id=${id}`);
    //       }),
    //       catchError(this.handleError)
    //     );
    // }



    

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
        .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
        .toPromise()
        .then(res => res  as Hero)
        .catch(this.handleError);
  }

//   update(hero: Hero): Promise<Hero> {
//     const url = `${this.heroesUrl}/${hero.id}`;
//     return this.http
//         .put(url, JSON.stringify(hero), { headers: this.headers })
//         .toPromise()
//         .then(() => hero)
//         .catch(this.handleError);
//   }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

