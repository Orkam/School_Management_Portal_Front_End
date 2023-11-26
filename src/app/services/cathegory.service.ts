import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CathegoryService {

  constructor(private http:HttpClient) { }


  public listCathegories(){
    return this.http.get(`${baserUrl}/cathegory/`);
  }

  public addCathegory(cathegory:any){
    return this.http.post(`${baserUrl}/cathegory/`,cathegory);
  }
}
