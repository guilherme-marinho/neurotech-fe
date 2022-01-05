import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() type: string = '';
  @Input() input : any = '';
  @Input() disabled:boolean = false;
  @Input() parentForm:any;
  @Input() controlName:any;
  @Input() groupName:any;
  @Input() arrayName:any;
  @Input() icon:any;


  @Output() emitKeyUp = new EventEmitter();
  @Output() output = new EventEmitter();



  nameFormControl = new FormControl('32131', [
    Validators.required
  ]);

 

  constructor() { }

  ngOnInit(): void {
    if(this.disabled){
      this.nameFormControl.disable();
    }
  }

  returnInputValue(){
    this.output.emit(this.input)
  }

  returnInputKeyUp(){
    this.emitKeyUp.emit(this.input)
  }

}
