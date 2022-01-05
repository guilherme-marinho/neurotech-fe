import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from './shared/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactModalComponent,
    InputComponent,
    EditContactModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    CdkTableModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  exports:[
    InputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
