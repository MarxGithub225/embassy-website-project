import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newsState } from 'src/assets/config/interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
// define the subjects
state: newsState = {
  news : []
};


stateSubject: BehaviorSubject<newsState> = new BehaviorSubject(this.state);
readonly stateObservable = this.stateSubject.asObservable();

constructor(
  private http: HttpClient
) { }

  async init () {

    const result: any = await this.http.get(environment.url + 'news/get')
    .toPromise();

    if (result.data) {
      this.state.news = result.data.filter(data => Number(data.state) === 1);
      this.stateSubject.next(this.state);
    }else {
      this.state.news = [];
      this.stateSubject.next(this.state);
    }
    
  }
}
