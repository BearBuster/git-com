import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'https://newsapi.org/v2/everything'
  apiKey = 'caf4599993a0435eba891e9963ac6026'
  defaultRequestParams = {
    q: 'apple',
    from: '2023-01-30',
    to: '2023-01-30',
    apiKey: this.apiKey
  }
  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News[]>{
    return this.http.get<News[]>(this.url, {
      params: {...this.defaultRequestParams, qwe: 2}
    })
  }
}
