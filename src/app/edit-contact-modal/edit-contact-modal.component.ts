import { LoadingService } from './../services/loading.service';
import { HubspotService } from './../services/hubspot.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.scss']
})
export class EditContactModalComponent implements OnInit {

  form!: FormGroup;
  contact = []

  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public hubsportService: HubspotService,
    public modalEditContact: MatDialogRef<EditContactModalComponent>,
    public loading: LoadingService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.form = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getContactById(this.data.id);
    
  }

  getContactById(id: number){
    this.hubsportService.getContactById(id).subscribe(
      (res:any) => {
        this.form = this.fb.group({
          firstname: [res.properties['firstname'], Validators.required],
          lastname: [res.properties['lastname'], Validators.required],
          email: [res.properties['email'], Validators.required]
        })
      }
    )
  }

  editContact(id: number, body: object){
    this.hubsportService.updateContact(id, body).subscribe()
    this.loading.on();
    this.modalEditContact.close(true);
  }

  closeModal(){
    this.modalEditContact.close(false)
  }

}
