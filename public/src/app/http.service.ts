import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient:HttpClient) {}

  getAll(){
    return this._httpClient.get('/api/authors');
  }
  deleteAuthor(id: string){
    return this._httpClient.delete('api/authors/'+id);
  }
  newOne(author: { name: string; qty: number; price:number}){
    return this._httpClient.post('/api/authors',author);
  }
  getOnebyId(id){
    return this._httpClient.get('/api/authors/'+id)
  }//这里要用get
  updateOne(id,newData){
    return this._httpClient.put('/api/authors/'+id,newData);
  }
}
