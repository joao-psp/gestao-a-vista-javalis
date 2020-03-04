import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';
import { OneOnOne } from '../shared/models/one-on-one.model';

@Injectable({
  providedIn: 'root'
})
export class OneOnOneService {
  constructor(private http: HttpClient) {}

  public recuperar(): Observable<OneOnOne> {
    let url = environment.oneOnOne;
    console.log('hsaushauhsuahsuh');
    let oneOnOne: OneOnOne;
    return this.http.get<OneOnOne>(url).pipe(
      timeout(300000),
      map((resultado: any) => {
        console.log(resultado);
        return new OneOnOne(resultado.tribeResult, resultado.name);
      })
    );
  }
}
