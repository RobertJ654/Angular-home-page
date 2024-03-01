import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrl: './card-editor.component.css'
})
export class CardEditorComponent implements OnInit{

  @Output() addCard = new EventEmitter<any>(); // Emite el evento addCard

  cardForm: FormGroup; // Define el FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      title: ['', Validators.required], // Define el FormControl 'title' con validación requerida
      subtitle: ['', Validators.required] // Define el FormControl 'subtitle' con validación requerida
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cardForm.valid) { // Verifica si el formulario es válido
      const formData = this.cardForm.value; // Obtiene los datos del formulario
      this.addCard.emit(formData); // Emite el evento addCard con los datos del formulario
      this.cardForm.reset(); // Reinicia el formulario
    }
  }

}
