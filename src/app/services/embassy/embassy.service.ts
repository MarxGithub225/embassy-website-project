import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { embassyState } from 'src/assets/config/interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmbassyService {
// define the subjects
state: embassyState = {
  embassies : []
};


stateSubject: BehaviorSubject<embassyState > = new BehaviorSubject(this.state);
readonly stateObservable = this.stateSubject.asObservable();

constructor(
  private http: HttpClient
) { }

  async init () {

    const result: any = await this.http.get(environment.url + 'embassy/get')
    .toPromise();

    if (result.data) {
      this.state.embassies = result.data.filter(data => Number(data.state) === 1);
      this.stateSubject.next(this.state);
      
    }else {
      this.state.embassies = [];
      this.stateSubject.next(this.state);
    }
    
  }
}
