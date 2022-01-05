import { HubspotService } from './../services/hubspot.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss']
})
export class AddContactModalComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public hubspotService: HubspotService
  ) { 
    this.form = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }


  addContact(){
    this.hubspotService.createContact(this.form.value).subscribe()  
  }
}
