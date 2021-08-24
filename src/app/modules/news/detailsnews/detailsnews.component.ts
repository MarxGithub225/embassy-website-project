import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentralService } from 'src/app/services/central.service';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-detailsnews',
  templateUrl: './detailsnews.component.html',
  styleUrls: ['./detailsnews.component.scss']
})
export class DetailsnewsComponent implements OnInit {

  id: any;

  moduleState: State;

  baseUrl : string = environment.url.replace('/routes', '');

  details: any;
  others: any[] = [];
  
  constructor(
    private central: CentralService,
    private activate: ActivatedRoute
  ) {

    window.scroll(0,0);
    this.id = activate.snapshot.paramMap.get('id');
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
    this.details = news.filter(data => Number(data.id) === Number(this.id))[0]
    this.others = news.filter(data => Number(data.id) !== Number(this.id)).sort((a,b) => Number (a.id) > Number (b.id) ? -1 : 1).slice(0,5)
  }
}
