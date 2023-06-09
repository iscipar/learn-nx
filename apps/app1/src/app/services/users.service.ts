import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getDataApi(): Observable<any> {
    const data = [
      {
        id: "64830ce08de2bfe4df01fbfe",
        name: "Frazier Foreman",
        image: "https://gravatar.com/avatar/377ac9326ebaee4044d830819df6e046?s=400&d=robohash&r=x"
      },
      {
        id: "64830ce0944399626030c684",
        name: "Murray Lucas",
        image: "https://gravatar.com/avatar/377ac9326ebaee4044d830819df6e046?s=400&d=monsterid&r=x"
      },
      {
        id: "64830ce0f2413074406596c3",
        name: "Acevedo Burks",
        image: "https://gravatar.com/avatar/377ac9326ebaee4044d830819df6e046?s=400&d=wavatar&r=x"
      },
      {
        id: "64830ce020868d1fec1a44ac",
        name: "Mckinney Harrington",
        image: "https://robohash.org/377ac9326ebaee4044d830819df6e046?set=set4&bgset=&size=400x400"
      },
      {
        id: "64830ce00f793dceafdca3cf",
        name: "Janis Newton",
        image: "https://gravatar.com/avatar/23a895fd8417da09de8de12615aaf9dd?s=400&d=robohash&r=x"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
