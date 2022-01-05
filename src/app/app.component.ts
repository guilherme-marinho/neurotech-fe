import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from './services/loading.service';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { HubspotService } from './services/hubspot.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'createdate', 'email', 'dots'];
  contacts:any
  teste:any;
  dataSource = [];
  form!: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    public hubspotService: HubspotService,
    public dialog: MatDialog,
    public loading: LoadingService
  ){
    this.form = this.fb.group({
      api_key: [null, Validators.required],
    })
  }

  ngOnInit(){
    this.getAllContacts()
  }
  
  getAllContacts(){
    this.hubspotService.getAllContacs().subscribe(
      (res:any) => {        
        this.dataSource = res.map((contact:any) => contact.properties)
        console.log(this.dataSource);
        
      }
    )
  }

  openModalAddContact(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.backdropClass = 'backdropBackground';
    const dialogRef = this.dialog.open(AddContactModalComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res){
          this.getAllContacts()
        }
      }
    )
  }

  openEditDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id
    };
    dialogConfig.width = '100%';
    dialogConfig.backdropClass = 'backdropBackground';
    const dialogRef = this.dialog.open(EditContactModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res){
          this.loading.off()
          this.getAllContacts()
        }
        
      }
    )
  }

  setApiKey(){
    localStorage.setItem('apiKey', this.form.value['api_key'])
    window.location.reload()    
  }  
}

