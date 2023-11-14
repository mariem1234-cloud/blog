import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  id:any;
  article:any;

  constructor(private _article:ArticleService,private act:ActivatedRoute){}

  ngOnInit(): void {
this.id=this.act.snapshot.paramMap.get('id');

this._article.getbyid(this.id)
.subscribe(
  res=>{
this.article=res
  },
  err=>{
    console.error("Error loading article:",err)
  }
)




    
  }



}
