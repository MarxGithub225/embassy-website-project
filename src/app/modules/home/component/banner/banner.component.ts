import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { State} from 'src/assets/config/interfaces'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  moduleState: State;

  baseUrl : string = environment.url.replace('/routes', '');
  constructor(
    private central: CentralService
  ) { }

  ngOnInit(): void {

    this.central.stateObservable.subscribe( state => {
      this.moduleState = state
    })
  }

  sliders = [
    'assets/im1.jpg',
    'assets/im1.jpg'
  ]
}
