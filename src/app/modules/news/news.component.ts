import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentralService } from 'src/app/services/central.service';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  moduleState: State;

  baseUrl : string = environment.url.replace('/routes', '');

  thenews: any[] = [];
  
  constructor(
    private central: CentralService,
    private activate: ActivatedRoute
  ) {

    window.scroll(0,0);
   }

  ngOnInit(): void {
    
    this.central.stateObservable.subscribe( state => {
      this.moduleState = state

      if(this.moduleState.news && this.moduleState.news.length > 0) {
        this.getDetails(this.moduleState.news)
      }
    })

  }


  getDetails (news) {
    this.thenews = news.sort((a,b) => Number (a.id) > Number (b.id) ? -1 : 1)
  }
}
