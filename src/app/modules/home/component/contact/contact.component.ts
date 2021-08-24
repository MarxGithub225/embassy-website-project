import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CentralService } from 'src/app/services/central.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lastname  = new FormControl('', [Validators.required]);
  firstname  = new FormControl('', [Validators.required]);
  subject  = new FormControl('', [Validators.required]);
  message  = new FormControl('', [Validators.required]);
  email  = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private central: CentralService
  ) { }

  ngOnInit(): void {
  }


  sendMessage () {

    if(
      this.lastname.invalid ||
      this.firstname.invalid ||
      this.subject.invalid ||
      this.message.invalid ||
      this.email.invalid
      ) {
        this.lastname.markAsTouched();
        this.firstname.markAsTouched();
        this.subject.markAsTouched();
        this.email.markAsTouched();
        this.message.markAsTouched();
        return;
      }


      const data = {
        lastname : this.lastname.value,
        firstname : this.firstname.value,
        subject : this.subject.value,
        message : this.message.value,
        email : this.email.value
      }

      this.central.sendMessage(data)
      .then(res => {
        if(res) {
          this.lastname.reset('');
          this.firstname.reset('');
          this.subject.reset('');
          this.message.reset('');
          this.email.reset('');
        }
      })
  }
}