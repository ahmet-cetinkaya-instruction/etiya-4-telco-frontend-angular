import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-medium',
  templateUrl: './add-contact-medium.component.html',
  styleUrls: ['./add-contact-medium.component.css']
})
export class AddContactMediumComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl('', Validators.required),
    homePhone: new FormControl('',Validators.required),
    mobilePhone: new FormControl('', Validators.required),
    fax: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
