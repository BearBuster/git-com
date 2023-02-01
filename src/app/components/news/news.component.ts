import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../models/news";
import {finalize} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  newsList: News[] = []
  requestExecuting: boolean = false
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.requestExecuting = true
    this.newsService.getAllNews().pipe(
      finalize(() => {
        this.requestExecuting = false
      })
    ).subscribe(res => {
      console.log(res['articles'])
      this.newsList = res['articles']
    })
  }



}
