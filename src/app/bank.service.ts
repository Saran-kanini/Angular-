import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Current } from './Current';
import { Saving } from './Saving';


@Injectable({
  
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  getData() :Observable<Current[]>
  {
    return this.http.get<Current[]>('https://localhost:7227/api/Current')
  }
 
  getById(accountId : number) :Observable<Current | undefined>
  {
    return this.http.get<Current>(`https://localhost:7227/api/Current/${accountId}`);

  }
  update(accountId:number,Current : Current) :Observable<Current>{
      return this.http.put<Current>(`https://localhost:7227/api/Current/${accountId}`,Current);
    }
    deleteById(accountId : number) :Observable<Current | undefined>
    {
      return this.http.delete<Current>(`https://localhost:7227/api/Current/${accountId}`);
    }
    create(Current:Current) : Observable<Current>{
      return this.http.post<Current>('https://localhost:7227/api/Current',Current);
    }
}
