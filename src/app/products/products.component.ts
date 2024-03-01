import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardEditorComponent } from '../card-editor/card-editor.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private _dialog:MatDialog) {}

  addCard() {
    this._dialog.open(CardEditorComponent);
  }
  
}
