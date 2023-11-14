import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  constructor(private _auth:AuthService, private _article:ArticleService, private router:Router){}
  
  ngOnInit(): void {}

article:any={
  title:'',
  content:'',
  tags:[],
  description:''
}

tag:any='';

image:any;

select(e:any){
  this.image=e.target.files[0]
}

create(){
  let fd=new FormData()
  fd.append('title', this.article.title),
  fd.append('content', this.article.content),
  fd.append('description', this.article.description),
  fd.append('tags', this.article.tags.toString()),
  fd.append('image', this.image),
  fd.append('idAuthor', this._auth.AuthorDataFromToken()._id)

  this._article.create(fd)
  .subscribe(
    res=>{
      this.router.navigate(['/home'])

    }, 
    err=>{
      console.log(err)
    }
  )
}



}