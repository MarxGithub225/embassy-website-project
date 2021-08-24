import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-myembassy',
  templateUrl: './myembassy.component.html',
  styleUrls: ['./myembassy.component.scss']
})
export class MyembassyComponent implements OnInit {

  selected = 0;

  data = [
    {
      id: 0,
      name: 'Côte d\'Ivoire',
      flag: 'assets/ci.png',
      embassyPic: 'assets/unnamed.jpg',
      embassyName: 'Ivory Coast embassy',
      location : '',
      tel: '+22500000000',
      fax: '+22500000000',
      email: 'embassy@ci.ci'

    },

    
  ]

  countryDetails : any;

  moduleState: State;

  searchText;
  
  baseUrl : string = environment.url.replace('/routes', '');
  constructor(
    private central: CentralService,
    public matDialog: MatDialog, 
  ) { }


  public openModal = (modalWith, modalWithExt, modalRoot, modalTitle, modalDatas) => {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.width = modalWith + modalWithExt;
    dialogConfig.panelClass = "custom-dialog-container";
    dialogConfig.data = {root: modalRoot, title: modalTitle, data: modalDatas}
    this.matDialog.open(ModalComponent, dialogConfig);
  }

  ngOnInit(): void {

    this.central.stateObservable.subscribe( state => {
      this.moduleState = state

      if(this.moduleState.embassies && this.moduleState.embassies.length > 0) {

        this.countryDetails = this.moduleState.embassies[0]
      }
    })

    
  }


  
}
