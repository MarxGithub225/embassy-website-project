import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CentralService } from 'src/app/services/central.service';

@Component({
  selector: 'app-askvisa',
  templateUrl: './askvisa.component.html',
  styleUrls: ['./askvisa.component.scss']
})
export class AskvisaComponent implements OnInit {


  name  = new FormControl('', [Validators.required]);
  address  = new FormControl('', [Validators.required]);
  phone  = new FormControl('', [Validators.required]);
  country  = new FormControl('', [Validators.required]);
  djob  = new FormControl('', [Validators.required]);
  type  = new FormControl('', [Validators.required]);
  email  = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private central: CentralService
  ) { }

  ngOnInit(): void {
  }


  ask () {

    if(
      this.name.invalid ||
      this.address.invalid ||
      this.phone.invalid ||
      this.djob.invalid ||
      this.type.invalid ||
      this.email.invalid ||
      this.country.invalid
      ) {
        this.name.markAsTouched();
        this.address.markAsTouched();
        this.phone.markAsTouched();
        this.djob.markAsTouched();
        this.type.markAsTouched();
        this.email.markAsTouched();
        this.country.markAsTouched();
        return;
      }


      const data = {
        name : this.name.value,
        address : this.address.value,
        phone : this.phone.value,
        djob : this.djob.value,
        country : this.country.value,
        type : this.type.value,
        email : this.email.value,
        state : 1,
        date: new Date().getTime()
      }

      this.central.askVisa(data)
      .then(res => {
        if(res) {
          this.name.reset('');
          this.address.reset('');
          this.country.reset('');
          this.phone.reset('');
          this.djob.reset('');
          this.email.reset('');
          this.type.reset('');
        }
      })
  }
}
