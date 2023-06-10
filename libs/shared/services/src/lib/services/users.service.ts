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
        "id": "64846c00d9340eb6cb0",
        "name": "Della Perkins",
        "company": "SULFAX",
        "phone": "+1 (911) 528-2448"
      },
      {
        "id": "64846c008c16b463e9d",
        "name": "Sweet Charles",
        "company": "SENTIA",
        "phone": "+1 (913) 539-3722"
      },
      {
        "id": "64846c0012ded5ac87f",
        "name": "Nadia Golden",
        "company": "NIKUDA",
        "phone": "+1 (846) 569-3365"
      },
      {
        "id": "64846c00694aef56e8f",
        "name": "Beasley Sawyer",
        "company": "BARKARAMA",
        "phone": "+1 (901) 515-3961"
      },
      {
        "id": "64846c002011d053ef2",
        "name": "Clarissa Moreno",
        "company": "KYAGORO",
        "phone": "+1 (932) 523-2261"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
