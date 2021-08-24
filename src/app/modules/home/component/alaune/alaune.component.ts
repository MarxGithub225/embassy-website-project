import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-alaune',
  templateUrl: './alaune.component.html',
  styleUrls: ['./alaune.component.scss']
})
export class AlauneComponent implements OnInit {

  moduleState: State;

  baseUrl : string = environment.url.replace('/routes', '');
  constructor(
    private central: CentralService
  ) { }

  une: any;
  news: any[];

  ngOnInit(): void {

    this.central.stateObservable.subscribe( state => {
      this.moduleState = state

      if(this.moduleState.news && this.moduleState.news.length > 0) {
        this.getUne(this.moduleState.news)
      }
    })
  }


  getUne (news) {
    this.news = news.sort((a,b) => Number (a.id) > Number (b.id) ? -1 : 1);
    this.une = news.sort((a,b) => Number (a.id) > Number (b.id) ? -1 : 1).slice(0,1)[0]
  }

}
