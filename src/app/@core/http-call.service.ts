import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import * as Rx from "rxjs";
import "rxjs/Rx";


@Injectable()
export class HttpService {

        constructor(private http:Http) {
           }


      public getData(): Observable<any>{
        return this.http.get('http://api.kwikz.nz/api/admin/users').map((res: Response) => {
          return res.json();
        } )
        }

  

}
