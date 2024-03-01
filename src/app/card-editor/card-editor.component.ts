import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrl: './card-editor.component.css'
})
export class CardEditorComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(
    private _fb: FormBuilder,
  ) {}

  onFormSubmit() {
  }

  onSubmit(form: any) {

  }

}
