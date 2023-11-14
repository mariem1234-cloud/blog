import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  articles: any;

  constructor(private _article:ArticleService){}

  ngOnInit(): void {
    
    this._article.getAll()
    .subscribe(
      res=>{
        this.articles=res;
      },
      err=>{
        console.log(err)
      }
    )
  }

}
