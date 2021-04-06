import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  clientContactForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email, Validators.minLength(6)]],
    message: ["", [Validators.required, Validators.minLength(6)]]
  });


  ngOnInit(): void {
  }
  submitRequest() { }
}
