import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

url='http://127.0.0.1:3000/article/';

  constructor(private http:HttpClient) { }

  create(article:any){
    return this.http.post(this.url+'ajout', article)
  }

  getAll(){
    return this.http.get(this.url+'all')
  }

  getbyid(id:any){
    return this.http.get(this.url+'getbyid/'+ id)
  }

  getbyidAuthor(id:any){
    return this.http.get(this.url+'getbyidauthor/'+id)
  }
}
