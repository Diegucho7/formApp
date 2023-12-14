import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({


    name : ['', [Validators.required]],
    email : ['', [Validators.required]],
    username : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    password2 : ['', [Validators.required]],

  });
  constructor(private fb: FormBuilder) { }


  
  onSubmit(){
  
   this.myForm.markAllAsTouched();

  }
  isValidField(field: string){

    //obtener la validacion desde un servicio

  }
}
