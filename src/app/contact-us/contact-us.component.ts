import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactUsModel } from './contact-us.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }
  ngOnInit() {
    this.contactForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      usermail: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      usermsg: new FormControl(null, [])
    });
  }

  kirim() {
    const contactUsModel = new ContactUsModel();

    contactUsModel.userName = this.contactForm.get('username').value;
    contactUsModel.userMail = this.contactForm.get('usermail').value;
    contactUsModel.userMsg = this.contactForm.get('usermsg').value;
    console.log(contactUsModel);
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return { 'blank': true };
    }
    return null;
  }

}
