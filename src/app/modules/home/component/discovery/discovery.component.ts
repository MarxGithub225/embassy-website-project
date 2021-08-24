import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  moduleState: State;

  baseUrl : string = environment.url.replace('/routes', '');
  constructor(
    private central: CentralService
  ) { }

  decouvertes: any[];

  ngOnInit(): void {

    this.central.stateObservable.subscribe( state => {
      this.moduleState = state

      if(this.moduleState.news && this.moduleState.news.length > 0) {
        this.getUne(this.moduleState.news)
      }
    })
  }


  getUne (news) {
    this.decouvertes = news.filter(data => Number(data.isOnDiscovery) === 1).sort((a,b) => Number (a.id) > Number (b.id) ? -1 : 1);
  }


  sliders = [
    'https://www.je-change-de-metier.com/img/lazy/images/fiches_metiers/fiche-metier-hotesse-steward_784.jpg',
    'https://m.onisep.fr/var/onisep/storage/images/media/images/metier_fiches-ideo/hotesse/17904613-1-fre-FR/hotesse.jpg'
  ]
}
