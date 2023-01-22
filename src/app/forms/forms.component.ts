import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  miForm: FormGroup;
  name: string=""
  email: string=""
  message: string=""
  rating: string=""

  constructor(private fb: FormBuilder) {

  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
  }

  ngOnInit() {
    this.miForm = this.fb.group({
      name: [, [Validators.required, Validators.minLength(5)]],
      email: [, [Validators.required, Validators.min(0), Validators.email]],
      message: [, [Validators.required, Validators.minLength(5)]],
      rating: [],
    })
  }

contacto() {
  console.log(this.miForm.value)
  console.log(this.name, this.email, this.message, this.rating)
}
}
