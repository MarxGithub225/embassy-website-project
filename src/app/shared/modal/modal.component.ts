import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  public modalRoot: any;
  public modalTitle: any;
  public modalDatas: any;

  constructor(
    public dialog: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) { 

    this.modalRoot = datas.root;
    this.modalTitle = datas.title;
    this.modalDatas = datas.data;
  }

  ngOnInit(): void {

  }

}
